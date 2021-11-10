import React, {useState} from 'react';
import {connect} from "react-redux";

import Post from './Post/Post';

import {createPost, likePost} from "../../../redux/actions";
import moment from "moment";

const MyPosts = (props) => {
    const [inputText, setInputText] = useState("");
    let addPost = () => {
        let formattedText = inputText.trim(); // Remove whitespaces from the start and the end
        formattedText = formattedText.replace(/\s\s+/g, " "); // remove tabs, newlines, etc.

        if (!formattedText) {
            setInputText("");
            return;
        }
        let newPost = {
            author: "tkalandarov",
            msg: inputText,
            likes: 0,
            datePosted: moment().format("MM/D/YYYY hh:mm A")
        }
        props.createPost(newPost);
        setInputText("");
    }

    let changeInput = (e) => {
        setInputText(e.target.value);
    }

    const likePost = (id) => {
        props.likePost(id);
    }


    let myPosts = props.myPosts;

    let postsView = <p style={{textAlign: "center"}}>No posts yet</p>;
    if (myPosts.length) {
        postsView = myPosts.map(post =>
            <Post msg={post.msg}
                  likes={post.likes}
                  onLikeClicked={(id) => likePost(id)}
                  author={post.author}
                  datePosted={post.datePosted}
                  id={post.id}
                  key={post}/>)
    }

    return (
        <div className="container">
            <h2 className="text-center">My posts</h2>
            <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="What's new?" id="postInput"
                              style={{height: 100, resize: "none"}} onChange={changeInput} value={inputText}/>
                <label htmlFor="postInput">What's new?</label>
            </div>
            <button className="btn btn-primary mx-auto" onClick={addPost}>Add new post</button>
            {postsView}
        </div>
    );
};

const mapDispatchToProps = {
    createPost,
    likePost
}

const mapStateToProps = state => {
    return {
        myPosts: state.postsReducer.posts.filter(x=>x.author==="tkalandarov")
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);