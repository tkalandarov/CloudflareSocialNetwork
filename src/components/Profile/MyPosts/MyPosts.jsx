import React, {useState} from 'react';
import {connect} from "react-redux";

import Post from './Post/Post';
import classes from './MyPosts.module.css';

import {createPost} from "../../../redux/actions";

const MyPosts = (props) => {
    const [inputText, setInputText] = useState("");
    let addPost = () => {
        props.createPost({msg: inputText});
        setInputText("");
    }

    let changeInput = (e) => {
        setInputText(e.target.value);
    }

    let myPosts = props.myPosts;

    let postsView = <p style={{textAlign: "center"}}>No posts yet</p>;
    if (myPosts.length) {
        postsView = myPosts.map(post =>
            <Post msg={post.msg}
                  likes={post.likes}
                  author={post.author}
                  datePosted={post.datePosted}
                  key={post}/>)
    }

    return (
        <div className="container">
            <h2 className={classes.feedTitle}>Feed</h2>
            <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Your text goes here" id="postInput"
                              style={{height: 100, resize: "none"}} onChange={changeInput} value={inputText}/>
                <label htmlFor="postInput">Your text goes here</label>
            </div>
            <button className="btn btn-primary mx-auto" onClick={addPost}>Add new post</button>
            {postsView}
        </div>
    );
};

const mapDispatchToProps = {
    createPost
}

const mapStateToProps = state => {
    return {
        myPosts: state.profileReducer.posts
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);