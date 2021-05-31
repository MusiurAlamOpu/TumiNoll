import React from "react";
import Header from "../Home/Header/Header";
import Image from "../../Images/cat.jpg";
import FakeVideoData from "../Home/VideoSection/FakeVideo.json";
import VideoCard from "../Home/VideoSection/VideoCard";
import {
  ThumbUp,
  ThumbDown,
  Report,
  Share,
  Notifications,
  Save,
  MoreHoriz,
  SortByAlpha,
  Sort,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import SuggestenVideos from "./SuggestenVideos";

const VideoPlayStage = () => {
  const { title, channel_subscription, video_views, channel } =
    FakeVideoData[0];
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          padding: "1% 5%",
          backgroundColor: "#F9F9F9",
        }}
      >
        <div style={{ flex: "0.65", padding: "1%", textAlign: "left" }}>
          <img
            style={{ width: "100%", paddingBottom: "2%" }}
            src={Image}
            alt=""
          ></img>
          <div style={{ color: "#065FD4", fontSize: "12px" }}>#endregion</div>
          <div style={{ fontSize: "18px", color: "#030303" }}>{title}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid lightgrey",
              marginBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <div style={{ color: "#606060" }}>
              {video_views} views <span sytle={{ color: "#606060" }}>•</span> 9
              months ago
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#606060",
                height: "40px",
                padding: "0px 10px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <ThumbUp />
                    </div>
                    <div style={{ padding: "0px 10px" }}>78</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <ThumbDown />
                    </div>
                    <div style={{ padding: "0px 10px" }}>22</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "grey",
                      height: "3px",
                      width: "78%",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "lightgrey",
                      height: "3px",
                      width: "22%",
                    }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <div>
                  <Share />
                </div>
                <div>Share</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <div>
                  <Save />
                </div>
                <div>Save</div>
              </div>

              <div style={{ padding: "0px 10px" }}>
                <MoreHoriz />
              </div>
            </div>
          </div>

          {/* channel details */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img
                  style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                  src={Image}
                  alt=""
                ></img>
              </div>
              <div style={{ padding: "0px 20px" }}>
                <div
                  style={{
                    color: "#030303",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {channel}
                </div>
                <div style={{ color: "#606060", fontSize: "12px" }}>
                  {channel_subscription} subscribers
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                style={{
                  // backgroundColor: "#CC0000",
                  backgroundColor: "#23A8F2",
                  color: "white",
                  width: "130px",
                  height: "40px",
                }}
              >
                Subscribe
              </Button>
              {/* <Notifications
                style={{ paddingLeft: "20px", color: "grey" }}
              ></Notifications> */}
            </div>
          </div>
          <div
            style={{
              color: "#030303",
              padding: "10px 65px",
              borderBottom: "1px solid lightgrey",
            }}
          >
            How to connect Xiaomi Redmi note 7 smartphone mobile to Windows 10
            laptop using screen cast. 💛Don't forget to like, subscribe and turn
            <br />
            on notifications💛 🐦Check out TECH SYNERGIST🐦
            <br />
            #screencast #windows10 #xiaomi
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 0px",
            }}
          >
            <div style={{ paddingRight: "10%" }}>0 comments</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Sort />
              </div>
              <div style={{ padding: "0px 10px" }}>SORT BY</div>
            </div>
          </div>
        </div>
        <div style={{ flex: "0.35" }}>
          {FakeVideoData.map((videoData) => {
            return <SuggestenVideos videoData={videoData}></SuggestenVideos>;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayStage;
