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

/* With all components for testing
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

const Tuiter = () => {
  return(
      <ExploreScreen/>
  )

};

export default Tuiter;