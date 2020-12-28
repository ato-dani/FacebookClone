import React from 'react';
import "./Posts.css";
import PostRow from "./PostRow";
import {connect} from "react-redux";
import {stateToUser} from "./redux/selectors";
import {useState, useEffect} from "react";
import database from "./firebase";
function Posts({user}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log("database " + database.collection("posts"));
        database.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => (
                {id: doc.id, data: doc.data() })))
        );
    }, [])
    return (
        <div>
            {posts.map((post) => (
                <PostRow key = {post.id}
                    profileSrc = {post.data.profileSrc} 
                    name = {post.data.username}
                    timestamp = {post.data.timestamp}
                    comment = {post.data.comment}
                    img = {post.data.img} 
                    liked = {false}
                />  
            ))}
        </div>
    )
}

export default connect(state => ({user: stateToUser(state)})) (Posts)
