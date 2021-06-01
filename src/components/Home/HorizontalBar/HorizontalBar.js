import { Button } from "@material-ui/core";
import React from "react";
import "./HorizontalBar.css";

const HorizontalBar = () => {
  const keywordStyle = {
    border: "1px solid grey",
    backgroundColor: "#F2F2F2",
    borderRadius: "30px",
    color: "#030303",
    height: "30px",
  };
  const keywordList = [
    "All",
    "Mixes",
    "MERN",
    "Live",
    "JavaScript",
    "React",
    "Node",
    "Programming",
    "Jhankar",
    "OPUTECH",
    "Bangladesh",
    "Dhaka",
    "Argentina",
    "Saudi",
    "Qatar",
    "Afganistan",
    "Cat",
  ];
  return (
    <div
      id="mainDiv"
      style={{
        overflowX: "scroll",
        display: "flex",
        width: "1280px",
        backgroundColor: "white",
      }}
    >
      {keywordList.map((keyword) => {
        return (
          <div style={{ padding: "5px" }}>
            <Button style={keywordStyle}>{keyword}</Button>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalBar;
