import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "./Comments.jsx";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8080/?postId=${id}`,
                { mode: "cors" }
            );
            const res = await response.json();

            setPost(res.posts[0]);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>{post?.title}</h1>
            <p>{post?.text}</p>
            <Comments id={id} />
        </>
    );
};

export default Post;
