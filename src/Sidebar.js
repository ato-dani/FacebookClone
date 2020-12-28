import React from 'react'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SidebarRow from './SidebarRow';
import PeopleIcon from '@material-ui/icons/People';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import EventIcon from '@material-ui/icons/Event';
import HistoryIcon from '@material-ui/icons/History';
import "./Sidebar.css";
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import {stateToUser} from "./redux/selectors";
import {connect} from "react-redux";
function Sidebar({user}) {
    return (
        <div className = "sidebar">
          <SidebarRow src={user.photoURL} title={user.displayName} />
          <SidebarRow Icon={LocalHospitalIcon} title={"COVID-19 Information Centre"} htmlColor={"purple"} />
          <SidebarRow Icon={PeopleIcon} title={"Friends"} htmlColor={"#2e81f4"} />
          <SidebarRow Icon={TurnedInIcon} title={"Saved"} htmlColor={"purple"} />
          <SidebarRow Icon={GroupWorkRoundedIcon} title={"Groups"} htmlColor={"#2e81f4"}/>
          <SidebarRow Icon={StorefrontIcon} title={"Marketplace"} htmlColor={"#2e81f4"}/>
          <SidebarRow Icon={OndemandVideoIcon} title={"Videos"} htmlColor={"#2e81f4"}/>
          <SidebarRow Icon={EventIcon} title={"Events"} htmlColor={"red"}/>
          <SidebarRow Icon={HistoryIcon} title={"Memories"} htmlColor={"#2e81f4"}/>
          <SidebarRow Icon={ArrowDropDownTwoToneIcon} title={"See more"} htmlColor={"black"}/>
          

        </div>
    )
}

export default connect(state => ({user: stateToUser(state)})) (Sidebar)
