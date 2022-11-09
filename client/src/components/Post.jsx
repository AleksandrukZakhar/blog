import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "./Comments.jsx";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://thawing-ocean-75564.herokuapp.com/?postId=${id}`,
                { mode: "cors" }
            );
            const res = await response.json();

            setPost(res.posts[0]);
        };

        fetchData();
    }, []);

    return (
        <>
            <div class="post">
                <h1>{post?.title}</h1>
                <p>{post?.text}</p>
            </div>
            <Comments id={id} />
        </>
    );
};

export default Post;
