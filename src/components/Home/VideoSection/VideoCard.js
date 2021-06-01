import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../../App";
import image from "../../../Images/cat.jpg";
import { MoreVert } from "@material-ui/icons";
// import "./VideoCard.css";

const VideoCard = (props) => {
  const [menuClicked, setmenuClicked] = useContext(MenuContext);
  const { id, title, channel, video_views } = props.videoData;

  let CardAttributes = {
    width: "305px",
    margin: ".5%",
    padding: ".5%",
    backgroundColor: "white",
    borderRadius: "5px",
  };
  if (menuClicked) {
    CardAttributes = {
      width: "270px",
      // height: "230px",
      padding: "0.5%",
      backgroundColor: "white",
      borderRadius: "5px",
    };
  }
  const VideoLink = `/video/${id}`;
  return (
    <Link
      id="CardAsLink"
      style={{ color: "black", textDecoration: "none", margin: "8px" }}
      to={VideoLink}
    >
      <div style={CardAttributes}>
        <div>
          <img style={{ width: "100%" }} src={image} alt=""></img>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.2" }}>
            <img
              style={{ width: "45px", height: "40px", borderRadius: "50%" }}
              src={image}
              alt=""
            ></img>
          </div>
          <div style={{ flex: "0.8", textAlign: "left", paddingRight: "4px" }}>
            <div style={{ fontSize: "14px", fontWeight: "550" }}>{title}</div>
            <div
              style={{ fontSize: "14px", color: "#606060", fontWeight: "500" }}
            >
              {channel}
            </div>
            <div style={{ color: "#606060" }}>
              {video_views} views <span sytle={{ color: "#606060" }}>•</span> 9
              months ago
            </div>
          </div>
          <div>
            <MoreVert />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
