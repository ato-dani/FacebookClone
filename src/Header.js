import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import "./Header.css";
import { connect } from 'react-redux';
import {stateToUser} from "./redux/selectors";
const fbImage = "https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png";

function Header({user}) {
return (
        <div className="header" style={{ width: "100%", }}>
            <div className="header_left">
                <img src={fbImage} alt="facebook logo"/>
                <div className="search_field">
                    <SearchIcon />
                    <input type="text" placeholder = "Search Facebook"/>
                </div>
            </div>
            <div className="header_middle">
                <div class="header_option " id = "selected_page" title="Home">
                    <HomeIcon />
                </div>
                <div class="header_option" title="Watch">
                    <OndemandVideoIcon/>
                </div>
                <div class="header_option" title = "Marketplace">
                    <StorefrontIcon/>
                </div>
                <div class="header_option" title="Groups">
                    <GroupWorkRoundedIcon/>
                </div>
                <div class="header_option" title = "Gaming">
                    <SportsEsportsIcon/>
                </div> 
            </div>
            <div className="header_right">
                <div className="header_info">
                <Avatar src={user.photoURL}/>
                    <h4> {user.displayName} </h4>
                </div>
                <div class="header_option" title="Create">
                    <AddIcon/>
                </div>
                <div class="header_option" title="Messenger">
                    <ChatIcon/>
                </div>
                <div class="header_option" title="Notifications">
                    <NotificationsIcon/>
                </div>
                <div class="header_option" title="Account">
                    <ArrowDropDownCircleIcon/>
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({user: stateToUser(state)})) (Header)

