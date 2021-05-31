import React from "react";
import SideBarOption from "../SideBarOption/SideBarOption";

const SideBarOptions = (props) => {
  return (
    <div>
      {props.optionsProperty.map((optionProperty) => {
        return <SideBarOption optionProperty={optionProperty}></SideBarOption>;
      })}
    </div>
  );
};

export default SideBarOptions;
