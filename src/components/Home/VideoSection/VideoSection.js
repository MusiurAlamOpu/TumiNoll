import React from "react";
import HorizontalBar from "../HorizontalBar/HorizontalBar";
import FakeVideoData from "./FakeVideo.json";
import VideoCard from "./VideoCard";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <>
      <div style={{ position: "fixed" }}>
        <HorizontalBar />
      </div>
      <div id="mainSectionDiv">
        {FakeVideoData.map((videoData) => {
          return <VideoCard videoData={videoData}></VideoCard>;
        })}
      </div>
    </>
  );
};

export default VideoSection;
