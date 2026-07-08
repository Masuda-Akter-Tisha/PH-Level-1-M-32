export default function Post ({post}) {
    const {body, title, id} = post;
    return (
        <div>
            {/* <h3>Body : {post.body}</h3> */}
            <h2>Id : {id}</h2>
            <h3>Title : {title}</h3>
            <h4>Body : {body}</h4>
        </div>
    )
}