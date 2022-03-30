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
import ExploreComponent
  from "./components/tuiter/explore-screen/explore-component";
// import HomeScreen from "./components/tuiter/home-screen/home-screen";
import HomeScreen from "./components/tuiter/home-screen/index";
import ProfileScreen from "./components/tuiter/profile-screen/index";
import EditProfile from "./components/tuiter/profile/edit-profile";
import Profile from "./components/tuiter/profile/profile";

function App() {

  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route path="hello"
                     exact={true}
                     element={<HelloWorld/>}/>
              <Route path=""
                     exact={true}
                     element={<Labs/>}/>
              <Route path="labs"
                     exact={true}
                     element={<Labs/>}/>
              <Route path="tuiter"
                     exact={true}
                     element={<Tuiter/>}>
                <Route index
                       exact={true}
                       element={<HomeScreen/>}/>
                <Route path="home"
                       exact={true}
                       element={<HomeScreen/>}/>
                <Route path="explore"
                       exact={true}
                       element={<ExploreComponent/>}/>
                <Route path="profile"
                       exact={true}
                       element={<Profile/>}/>
                <Route path="editprofile"
                       exact={true}
                       element={<EditProfile/>}/>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );

}

export default App;