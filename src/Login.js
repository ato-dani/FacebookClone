import React from 'react';
import "./Login.css";
import {provider, auth} from "./firebase";
import {connect} from "react-redux";
import {getUser} from "./redux/actions";
const fbImageLogo = "https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png";
const fbTextLogo = "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg";
function Login(props) {
    const signIn = ({getUser}) => (
        auth.signInWithPopup(provider)
            .then(function(result) {
                props.getUser(result.user);
                
            })
            .catch(function(err) {
                alert("Error while logging in: "  + err.message);
            })
    );
    return (
        <div className = "login">
           <div className = "login_top">
                <img src = {fbImageLogo} alt = "Facebook's logo" />
                <img src = {fbTextLogo}  alt = "Facebook text logo" /> 
            </div>
            <div className = "login_bottom">
               <button type="submit" onClick = {() => signIn(props)}>
                   Sign in
               </button>
            </div>

        </div>
    )
}
export default connect(
    null,
    {getUser}
)(Login);


