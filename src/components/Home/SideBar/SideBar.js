import React from "react";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ExpandMoreOutlined,
  SportsEsports,
  WifiTethering,
  EmojiEvents,
  ThumbUp,
  Settings,
  Flag,
  Help,
  Feedback,
} from "@material-ui/icons";
import SideBarOptions from "./SideBarOptions/SideBarOptions";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const optionsProperty1 = [
    {
      OptionIcon: Home,
      optionTitle: "Home",
    },
    {
      OptionIcon: Explore,
      optionTitle: "Explore",
    },
    {
      OptionIcon: Subscriptions,
      optionTitle: "Subscriptions",
    },
  ];
  const optionsProperty2 = [
    {
      OptionIcon: VideoLibrary,
      optionTitle: "Library",
    },
    {
      OptionIcon: History,
      optionTitle: "History",
    },
    {
      OptionIcon: OndemandVideo,
      optionTitle: "Your video",
    },
    {
      OptionIcon: WatchLater,
      optionTitle: "Watch later",
    },
    {
      OptionIcon: ThumbUp,
      optionTitle: "Liked video",
    },
    {
      OptionIcon: ExpandMoreOutlined,
      optionTitle: "Show more",
    },
  ];
  const optionsProperty3 = [
    {
      OptionIcon: SportsEsports,
      optionTitle: "Gaming",
    },
    {
      OptionIcon: WifiTethering,
      optionTitle: "Live",
    },
    {
      OptionIcon: EmojiEvents,
      optionTitle: "Sport",
    },
  ];
  const optionsProperty4 = [
    {
      OptionIcon: Settings,
      optionTitle: "Setting",
    },
    {
      OptionIcon: Flag,
      optionTitle: "Report history",
    },
    {
      OptionIcon: Help,
      optionTitle: "Help",
    },
    {
      OptionIcon: Feedback,
      optionTitle: "Feedback",
    },
  ];
  return (
    <div id="sideBarDiv" className="sideBarDiv">
      <SideBarOptions optionsProperty={optionsProperty1}></SideBarOptions>
      <hr className="horizontalLineBreak" />
      <SideBarOptions optionsProperty={optionsProperty2}></SideBarOptions>
      <hr className="horizontalLineBreak" />
      <p style={{ color: "grey", fontWeight: "600" }}>MORE FROM TUMINOLL</p>
      <SideBarOptions optionsProperty={optionsProperty3}></SideBarOptions>
      <hr className="horizontalLineBreak" />
      <SideBarOptions optionsProperty={optionsProperty4}></SideBarOptions>
      <hr className="horizontalLineBreak" />
      <div className="linksSuperDiv">
        <div className="sideBarDiv__linksDiv">
          <div className="linkDiv">
            <Link className="links" to="/">
              About
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Press
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Copyright
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Contact us
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Creator
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Advertise
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Developers
            </Link>
          </div>
        </div>
        <div className="sideBarDiv__linksDiv">
          <div className="linkDiv">
            <Link className="links" to="/">
              Terms
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Privacy
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Policy & safty
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              How TumiNoll works
            </Link>
          </div>
          <div className="linkDiv">
            <Link className="links" to="/">
              Test new features
            </Link>
          </div>
        </div>
        <p className="googleLLC">© {new Date().getFullYear()} OPUTECH LLC</p>
      </div>
    </div>
  );
};

export default SideBar;
