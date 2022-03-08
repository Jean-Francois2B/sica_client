import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            const res = await axios.get("posts/timeline/621df8b1c9a10e0eb877adf5");
            console.log(res);
        }
        fetchPosts();
    })
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}


            </div>
        </div>
    )
}