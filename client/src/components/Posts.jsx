import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts?.map((post, index) => {
                const { _id, title, text } = post;

                return (
                    <div className="post" key={index}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <Link to={`/posts/${_id}`}>Read</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
