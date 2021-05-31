import React, { useContext } from "react";
import "./Header.css";

import YouTubeIcon from "../../../Images/youTubeIcon.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChannelAvater from "../../../Images/channelAvater.jpg";
import { Tooltip } from "@material-ui/core";
import { MenuContext } from "../../../App";

const Header = () => {
  const [menuClicked, setmenuClicked] = useContext(MenuContext);
  const menuClickedHandle = () => {
    if (menuClicked) {
      setmenuClicked(false);
    } else {
      setmenuClicked(true);
    }
  };
  return (
    <div className="header">
      <div className="header__leftDiv">
        <MenuIcon
          onClick={menuClickedHandle}
          className="header__leftDiv__menuIcon"
        ></MenuIcon>
        <div className="header__leftDiv__youTubeIcon">
          Tumi
          <span className="header__leftDiv__youTubeIcon__NollStyle">Noll</span>
        </div>
        {/* <img
          
          src={YouTubeIcon}
          alt=""
        ></img> */}
      </div>
      <div className="header__centerDiv">
        <input
          className="header__centerDiv__input"
          placeholder="Search"
          type="text"
        ></input>
        <Tooltip title="Search">
          <SearchIcon className="header__centerDiv__searchIcons"></SearchIcon>
        </Tooltip>
        <Tooltip title="Search with your voice">
          <MicIcon className="header__centerDiv__micIcon" />
        </Tooltip>
      </div>
      <div className="header__rightDiv">
        <Tooltip title="Create">
          <VideoCallIcon className="header__rightDiv__icons" />
        </Tooltip>
        <Tooltip title="YouTube apps">
          <AppsIcon className="header__rightDiv__icons" />
        </Tooltip>
        <Tooltip title="Notifications">
          <NotificationsIcon className="header__rightDiv__icons" />
        </Tooltip>
        <img
          className="header__rightDiv__channelAvater"
          src={ChannelAvater}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Header;
