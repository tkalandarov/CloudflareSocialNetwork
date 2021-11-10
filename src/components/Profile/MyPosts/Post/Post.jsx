import classes from './Post.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

const Post = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const onLikeCliked = () =>{
        console.log(likes);
        setLikes(likes+1);
        props.onLikeClicked(props.id);
    }

    return (
        <div className="card text-center my-3">
            <div className="card-body">
                <p className="card-text text-start">{props.msg}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className={classes.likes}>
                        {likes}
                        <FontAwesomeIcon icon={faHeart}/>
                    </span>
                    <button className="btn btn-primary" onClick={onLikeCliked}>Like!</button>
                </div>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between">
                <span>@{props.author}</span>
                <span>{props.datePosted}</span>
            </div>
        </div>
    )
};
export default Post;
