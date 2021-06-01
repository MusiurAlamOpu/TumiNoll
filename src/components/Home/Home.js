import React, { useContext } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import VideoSection from "./VideoSection/VideoSection";
import "./Home.css";
import { MenuContext } from "../../App";
import MiniSideBar from "./MiniSideBar/MiniSideBar";
import HorizontalBar from "./HorizontalBar/HorizontalBar";

const Home = () => {
  const [menuClicked, setmenuClicked] = useContext(MenuContext);
  return (
    <div>
      <Header />
      <div className="home__appSection">
        {!menuClicked ? (
          <div className="home__appSection__sideBar">
            <SideBar />
          </div>
        ) : (
          <div className="home__appSection__MiniSideBar">
            <MiniSideBar />
          </div>
        )}
        {!menuClicked ? (
          <div className="home__appSection__videoSection">
            <VideoSection />
          </div>
        ) : (
          <div className="home__appSection__videoSectionBig">
            <VideoSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
