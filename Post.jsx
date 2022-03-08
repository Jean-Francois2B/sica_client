import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from '@material-ui/icons';
import {Users} from "../../dummyData";


export default function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);
    const DP = process.env.REACT_APP_DOSSIER_PUBLIC;

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src={DP+post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={`${DP}like.png`} onClick={likeHandler}  alt="" />
                    <img className='likeIcon' src={`${DP}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
