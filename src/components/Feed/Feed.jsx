import React from "react";
import {connect} from "react-redux";
import Post from "../Profile/MyPosts/Post/Post";
import {createPost, likePost} from "../../redux/actions";

const Feed = (props) => {
    let posts = props.allPosts;

    let postsView = <p style={{textAlign: "center"}}>No posts yet</p>;
    if (posts.length) {
        postsView = posts.map(post =>
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
            <h2 className="text-center mt-3">Feed</h2>
            {postsView}
        </div>
    );
}

const mapDispatchToProps = {
    likePost
}

const mapStateToProps = state => {
    return {
        allPosts: state.postsReducer.posts
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Feed);