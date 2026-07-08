import { use } from "react"
import Post from "./Post";
import './App.css';

export default function Posts ({postsPromise}) {
   const posts = use (postsPromise);
    console.log(posts);
    
    return (
        <div className="card2">
            <h3>Your post are here : {posts.length}</h3>
            {
                posts.map (post => <Post post = {post}></Post>)
            }
        </div>
    )
}