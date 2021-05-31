import React from "react";
import MiniSideBarOption from "../MiniSideBarOption/MiniSideBarOption";

const MiniSideBarOptions = (props) => {
  return (
    <div>
      {props.optionsProperty.map((optionProperty) => {
        return (
          <MiniSideBarOption
            optionProperty={optionProperty}
          ></MiniSideBarOption>
        );
      })}
    </div>
  );
};

export default MiniSideBarOptions;
