const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts ? posts.map((post, index) => {
                const {_id, title, text} = post;
                const url = `/posts/${_id}`
                
                return (
                    <div className="post" key={index}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <a href={url}>Read</a>
                    </div>
                )
            }): null}
        </div>
    )
}

export default Posts;