import React from "react";
import FakeVideoData from "./FakeVideo.json";
import VideoCard from "./VideoCard";

const VideoSection = () => {
  // console.log(FakeVideoData);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        alignItems: "top",
      }}
    >
      {FakeVideoData.map((videoData) => {
        return <VideoCard videoData={videoData}></VideoCard>;
      })}
    </div>
  );
};

export default VideoSection;
