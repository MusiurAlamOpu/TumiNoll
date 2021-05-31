import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// import "./SideBarOption.css";

const MiniSideBarOption = (props) => {
  const { OptionIcon, optionTitle } = props.optionProperty;
  const location = useLocation();
  let OptionTitlePathForLink = `/${optionTitle.toLowerCase()}`;
  let OptionTitlePath = null;
  let ClassNameOfIcon = "optionDiv__iconNotSelected";
  let ClassNameOfTitle = "optionDiv__titleNotSelected";
  //   let ClassNameOfOptionDiv = "optionDivNotSelected";
  if (location.path === "/") {
    OptionTitlePath = "/";
  } else {
    OptionTitlePath = `/${optionTitle.toLowerCase()}`;
  }
  console.log("Option path: ", OptionTitlePath);
  if (location.pathname === OptionTitlePath) {
    ClassNameOfIcon = "optionDiv__iconSelected";
    ClassNameOfTitle = "optionDiv__titleSelected";
    // ClassNameOfOptionDiv = "optionDivSelected";
  } else {
    ClassNameOfIcon = "optionDiv__iconNotSelected";
    ClassNameOfTitle = "optionDiv__titleNotSelected";
    // ClassNameOfOptionDiv = "optionDivNotSelected";
  }
  // console.log("Option Color: ", OptionIconColor);

  return (
    <Link className="LinkStyle" to={OptionTitlePathForLink}>
      {/* ClassNameOfOptionDiv */}
      <div style={{ color: "red", width: "100%" }}>
        <OptionIcon className={ClassNameOfIcon}></OptionIcon>
        {/* className={ClassNameOfTitle} */}
        <p style={{ fontSize: "10px", color: "grey" }}>{optionTitle}</p>
      </div>
    </Link>
  );
};

export default MiniSideBarOption;
