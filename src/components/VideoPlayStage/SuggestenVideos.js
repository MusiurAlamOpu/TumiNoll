import React from "react";
import channel_image from "../../Images/cat.jpg";

const SuggestenVideos = (props) => {
  // console.log(props.videoData);
  const { id, title, channel, channel_subscription, video_views } =
    props.videoData;
  return (
    <div style={{ display: "flex", textAlign: "left", margin: "10px" }}>
      <div style={{ flex: "0.45" }}>
        <img style={{ height: "100px" }} src={channel_image} alt=""></img>
      </div>
      <div style={{ flex: "0.55" }}>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "Roboto, arial, sans-serif",
            color: "#030303",
          }}
        >
          {title}
        </div>
        <div>{channel}</div>
        <div style={{ color: "#606060" }}>
          {video_views} views <span sytle={{ color: "#606060" }}>•</span> 9
          months ago
        </div>
      </div>
    </div>
  );
};

export default SuggestenVideos;
