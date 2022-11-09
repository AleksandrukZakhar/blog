import { useEffect, useState } from "react";

const Comments = ({ id }) => {
    const [comments, setComments] = useState();
    const [nick, setNick] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8080/comments?postId=${id}`,
                { mode: "cors" }
            );
            const res = await response.json();

            setComments(res.result[0].comments);
        };

        fetchData();
    }, []);

    const commentHandler = async () => {
        await fetch(
            `http://localhost:8080/comments?postId=${id}&commentAuthor=${nick}&text=${text}`,
            { mode: "cors", method: "PUT" }
        );

        window.location.reload();
    };

    return (
        <div className="comments">
            <h1>Comments</h1>
            {comments?.map((comment, index) => {
                const { commentAuthor, text } = comment;

                return (
                    <div className="comment" key={index}>
                        <h2>{commentAuthor}</h2>
                        <p>{text}</p>
                        <img
                            src={`https://avatars.dicebear.com/api/adventurer-neutral/${commentAuthor}.svg`}
                        />
                    </div>
                );
            })}

            <input
                type="text"
                placeholder="username"
                onChange={(e) => setNick(e.target.value)}
            />
            <input
                type="text"
                placeholder="text"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={commentHandler}>Submit</button>
        </div>
    );
};

export default Comments;
