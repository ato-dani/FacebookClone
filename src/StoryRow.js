import React from 'react'
import "./StoryRow.css";
import { Avatar } from '@material-ui/core';
function StoryRow({profileSrc, name, storySrc}) {
    return (
        <div className="storyrow" style = {{backgroundImage: `url("${storySrc}")`, backgroundRepeat: 'no-repeat', width: "120px", height: "200px"}}>
            <Avatar src={profileSrc} className="profile_avatar"/>
            <h4>{name}</h4>
        </div>
    )
}

export default StoryRow
