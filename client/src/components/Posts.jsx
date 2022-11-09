import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts?.map((post, index) => {
                const { _id, title, text } = post;

                return (
                    <div className="post-card" key={index}>
                        <h1>{title}</h1>
                        <Link to={`/posts/${_id}`}>
                            <button>Read</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
