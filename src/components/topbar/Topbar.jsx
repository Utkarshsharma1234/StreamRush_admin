import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from '../../context/authContext/apiCalls';
import { Link } from "react-router-dom";

export default function Topbar() {

  const {dispatch} = useContext(AuthContext);

  const handleLogout = (e) =>{
    e.preventDefault();
    logout(dispatch);
}

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to={"/"}>
            <span className="logo">Admin DashBoard</span>
          </Link>
          
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
