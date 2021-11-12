import {getAssetFromKV, serveSinglePageApp} from '@cloudflare/kv-asset-handler'

const DEBUG = true;

addEventListener('fetch', event => {
    try {
        event.respondWith(handleEvent(event))
    } catch (e) {
        if (DEBUG) {
            return event.respondWith(
                new Response(e.message || e.toString(), {
                    status: 500,
                }),
            )
        }
        event.respondWith(new Response('Internal Error', {status: 500}))
    }
})

const setData = (key, data) => POSTS_KV.put(key, data);
const getData = key => POSTS_KV.get(key);

async function addNewPost(request) {
    const body = await request.text();
    const dataKey = `posts`;
    try {
        JSON.parse(body);
        await setData(dataKey, body);
        return new Response(body, {status: 200});
    } catch (err) {
        return new Response(err, {status: 500});
    }
}

const defaultData = {
    posts: [
        {
            id: 0,
            author: "tkalandarov",
            msg: "Hey guys, I am very excited to announce that I am starting to work on the assignment by Cloudflare. Hopefully, it will help me land an internship =)",
            likes: 55,
            datePosted: "11/6/2021 9:42 PM"
        }
    ]
}

async function getPosts(request) {
    const dataKey = `posts`;
    let data = await getData(dataKey);
    if (!data) {
        await setData(dataKey, JSON.stringify(defaultData));
        data = defaultData;
    }

    const json = JSON.stringify(data, null, 2)
    return new Response(json, {
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    });
}

async function handleEvent(event) {
    const {request} = event;
    const {url} = request;
    let options = {
        mapRequestToAsset: serveSinglePageApp
    };

    try {
        if (DEBUG) {
            // customize caching
            options.cacheControl = {
                bypassCache: true,
            };
        }

        if (url.includes("/api/posts")) {
            if (request.method === "POST") {
                return addNewPost(request);
            } else {
                return getPosts(request);
            }
        }

        const page = await getAssetFromKV(event, options);
        // allow headers to be altered
        const response = new Response(page.body, page);
        response.headers.set("X-XSS-Protection", "1; mode=block");
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("Referrer-Policy", "unsafe-url");
        response.headers.set("Feature-Policy", "none");

        return response;

    } catch (e) {
        // if an error is thrown try to serve the asset at 404.html
        if (!DEBUG) {
            try {
                let notFoundResponse = await getAssetFromKV(event, {
                    mapRequestToAsset: serveSinglePageApp,
                })

                return new Response(notFoundResponse.body, {...notFoundResponse, status: 404})
            } catch (e) {
            }
        }

        return new Response(e.message || e.toString(), {status: 500})
    }
}