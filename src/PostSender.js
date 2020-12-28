import React from 'react'
import "./PostSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import {connect} from "react-redux";
import {stateToUser} from "./redux/selectors";
import {useState} from "react";
import database from "./firebase";
import firebase from "firebase";
function PostSender({user}) {
    const [value, setValue] = useState("");
    const postData = (event) => {
        event.preventDefault();
        database.collection("posts").add( {
            comment: value,
            img: "",
            profileSrc: user.photoURL,
            username: user.displayName,
            timestamp: firebase.firestore.Timestamp.now(),
        })
        setValue("");
    }
    return (
        <div className = "postsender"> 
            <div className = "postsender_top">
                <Avatar src = {user.photoURL} />
                <form className="postsender_input">
                    <input type="text" placeholder = {`Whats on your mind, ${user.displayName}?`} value = {value} onChange = {(e) => setValue(e.target.value)}/>
                    <button type = "submit" onClick = {postData} hidden/>
                </form> 
            </div>
            <div className = "postsender_bottom">
                <div className = "livevideo">
                    <VideocamIcon htmlColor="red" fontSize = "large"/>
                    <h4>Live video</h4>
                </div>
                <div className = "photolibrary">
                    <PhotoLibraryOutlinedIcon htmlColor = "green" fontSize = "large"/>
                    <h4> Photo/Video</h4>
                </div>
                <div className = "emotions">
                    <EmojiEmotionsOutlinedIcon htmlColor = "#ffce3b" fontSize = "large"/>
                    <h4>Feeling/Activity</h4>
                </div>
                
            </div>  
        </div>
    )
}
export default connect(state => ({user: stateToUser(state)})) (PostSender)
