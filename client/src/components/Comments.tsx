import { useState } from "react";

const Comments = ({ id, comments }) => {
    const [nick, setNick] = useState("");
    const [text, setText] = useState("");
    
    return (
        <div className="comments">
            <h1>Comments</h1>
            {comments ? comments.map((comment, index) => {
                const {commentAuthor, text} = comment;
            
                return (
                    <div className="post" key={index}>
                        <h2>{commentAuthor}</h2>
                        <p>{text}</p>
                    </div>
                )
            }): null}
            
            <form action={"http://localhost:8080/comments?postId=" + id + "&commentAuthor" + nick + "&text" + text} method="PUT">
                <input type="text" placeholder="nickname" value={nick} onChange={(e) => setNick(e.target.value)}/>
                <input type="text" placeholder="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Comments;