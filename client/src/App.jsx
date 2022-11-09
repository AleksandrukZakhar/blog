import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import Post from "./components/Post.jsx";

const App = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/", {
                mode: "cors",
            });
            const res = await response.json();

            setPosts(res.posts);
        };

        fetchData();
    }, []);

    return (
        <>
            <header>.Blog</header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Posts posts={posts} />} />
                    <Route path="/posts/:id" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
