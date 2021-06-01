import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import VideoPlayStage from "./components/VideoPlayStage/VideoPlayStage";
// import Header from "./components/Home/Header/Header";
export const MenuContext = createContext(false);

function App() {
  const [menuClicked, setmenuClicked] = useState(false);
  return (
    <div className="app">
      <MenuContext.Provider value={[menuClicked, setmenuClicked]}>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Home />
            </Route>
            <Route path="/video/:id">
              <VideoPlayStage />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Router>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
