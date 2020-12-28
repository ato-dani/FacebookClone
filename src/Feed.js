import React from 'react'
import "./Feed.css";

import Story from "./Story";
import PostSender from "./PostSender";
import Posts from "./Posts";
function Feed() {
    return (
        <div className="feed">
           <Story /> 
           <PostSender />
           <Posts />
           {/*  
                <Posts/>
           */
            }
        </div>
    )
}

export default Feed
