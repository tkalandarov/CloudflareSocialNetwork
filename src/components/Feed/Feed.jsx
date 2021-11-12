import React, {useEffect} from "react";
import {connect} from "react-redux";
import Post from "../Profile/MyPosts/Post/Post";
import {fetchPosts, likePost} from "../../redux/postsActions";
import {bindActionCreators} from "redux";

const Feed = (props) => {
    useEffect(() => {
        props.fetchPosts();
    }, []);

    let postsView = <p style={{textAlign: "center"}}>No posts yet</p>;
    if (props.posts.length) {
        postsView = props.posts.map(post =>
            <Post msg={post.msg}
                  likes={post.likes}
                  onLikeClicked={(id) => props.likePost(id)}
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

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts, likePost
}, dispatch);

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.isLoading,
        error: state.posts.error
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);