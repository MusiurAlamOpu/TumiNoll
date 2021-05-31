import React from "react";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
} from "@material-ui/icons";
import MiniSideBarOptions from "./MiniSideBarOptions/MiniSideBarOptions";

const MiniSideBar = () => {
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
    {
      OptionIcon: VideoLibrary,
      optionTitle: "Library",
    },
    {
      OptionIcon: History,
      optionTitle: "History",
    },
  ];

  // position: sticky;
  // top: 0;
  // z-index: 99;
  // background-color: white;
  return (
    <div
      style={{
        color: "grey",
        width: "100%",
        position: "sticky",
        top: "0",
        zIndex: "98",
        backgroundColor: "white",
        paddingTop: "60px",
      }}
    >
      <MiniSideBarOptions
        optionsProperty={optionsProperty1}
      ></MiniSideBarOptions>
    </div>
  );
};

export default MiniSideBar;
