import React from 'react';
import "./PostRow.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import {useState} from "react";
function PostRow({profileSrc, name, timestamp, comment, img, liked}) {
    const [postLiked, setPostLiked] = useState(liked);
    const likePost = (event) => {
        //alert("you clicked:  " + event.target.innerText + " id " + event.target.className)
        setPostLiked(!postLiked);
    }
    return (
        <div className = "postrow">
            {console.log("timestamp is: " +timestamp)}
            <div className= "postrow_top">
                <div className = "avatar">
                    <Avatar src = {profileSrc} />
                </div>
                <div className = "postinfo">
                    <h4>
                        {name}
                    </h4>
                    <p>
                        { 
                        timestamp ? new Date(timestamp.toDate()).toUTCString(): ""}
                    </p>
                </div>
            </div>
            <div className = "comment">
                <p> {comment} </p>
            </div>
           <div className="img">  
            <img src = {img} alt = {""} /> 
           </div>
           <div className="reactionsnumber">

           </div>
           <div className = "reactions" >
                <div className = {postLiked ? "post_option active": "post_option"} onClick = {(event) => likePost(event)} >
                    <ThumbUpIcon />
                    <p> Like </p>
                </div>
                
                <div className = "post_option">
                    <ChatBubbleOutlineIcon/>
                    <p> Comment </p>
                </div>
                <div className = "post_option">
                    <ShareIcon />
                    <p> Share </p>
                </div>
            </div> 
        </div>
    )
}

export default PostRow
