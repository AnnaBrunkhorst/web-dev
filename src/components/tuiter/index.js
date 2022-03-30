import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
// import "./tuiter.css";
import whos from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./who-to-follow-list";

const reducers = combineReducers({tuits: tuitsReducer, whos: whos});
const store = createStore(reducers);

const Tuiter = () => {
  return (
      <Provider store={store}>
        <div className="row mt-2">
          <div className="col-2 col-lg-1 col-xl-2">
            <NavigationSidebar active = {window.location.pathname.replace(/^.*(\\|\/|\:)/, '')}/>
          </div>
          <div className="col-10 col-lg-7 col-xl-6">
            <Outlet/>
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </Provider>
  );
};
export default Tuiter;

/* With all components for testing
import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list/index";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list/index";
import ExploreComponent from "./explore-screen/explore-component";
import ExploreScreen from "./explore-screen/explore-screen";
import PostItem from "./post-list/post-item";
import PostList from "./post-list/index";
import HomeScreen from "./home-screen/home-screen";

const Tuiter = () => {
  return(
      <>
        <h1>Tuiter</h1>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/">
          Labs
        </Link>
        <NavigationSidebar active="home"/>
        <WhoToFollowListItem/>
        <WhoToFollowListItem who={{
          avatarIcon: './virgin.png',
          userName: 'Virgin Galactic',
          handle: 'virgingalactic',
        }}
        />
        <WhoToFollowList/>
        <PostSummaryItem/>
        <PostSummaryItem post={{
          "topic": "Web Development",
          "userName": "",
          "title": "jQuery",
          "time": "last week",
          "image": "./jquery.png",
          "tweets": "122K"
        }}/>
        <PostSummaryList/>
        <ExploreComponent/>
        <ExploreScreen/>
      </>
  )

};

export default Tuiter;
 */

/*
const Tuiter = () => {
  return(
      <ExploreScreen/>
  )

};

export default Tuiter;

 */