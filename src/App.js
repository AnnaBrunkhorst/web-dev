import './vendors/bootstrap/css/bootstrap.min.css'; // Bootstrap
import './vendors/bootstrap/bootstrap.min.css'; // Bootswatch
import './vendors/fontawesome/css/all.css'; // FontAwesome
import React from "react";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./components/tuiter/css/bookmarks.css"
import "./components/tuiter/css/explore.css"
import ExploreScreen from "./components/tuiter/explore-screen/explore-screen";
import HomeScreen from "./components/tuiter/home-screen/home-screen";

function App() {

  return (
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello"
                 exact={true}
                 element={<HelloWorld/>}/>
          <Route path="/"
                 exact={true}
                 element={<Labs/>}/>
          <Route path="/tuiter"
                 exact={true}
                 element={<Tuiter/>}/>
          <Route path="/tuiter/home"
                 exact={true}
                 element={<HomeScreen/>}/>
          <Route path="/tuiter/explore"
                 exact={true}
                 element={<ExploreScreen/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );

}

export default App;