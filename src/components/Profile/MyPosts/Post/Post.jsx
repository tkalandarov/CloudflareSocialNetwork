const Post = (props) => {
    return (
        <div className="card text-center my-3">
            <div className="card-body">
                <p className="card-text text-start">{props.msg}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span>{props.likes} &hearts;</span>
                    <button className="btn btn-primary">Like!</button>
                </div>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between">
                <span>{props.author}</span>
                <span>{props.datePosted}</span>
            </div>
        </div>
    )
};

export default Post;
