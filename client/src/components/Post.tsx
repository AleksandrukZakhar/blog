const Post = ({post}) => {

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </>
    )
}

export default Post