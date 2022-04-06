import React from "react";
import {Link} from "react-router-dom";

/*
const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return(
      <>
            <div className="list-group">
                <a className="list-group-item" href="../HomeScreen/oldHome.html">
                    <i className="fab fa-twitter"></i></a>
                <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="../../../../tuiter/HomeScreen/oldHome.html">
                    <i className="fas fa-home"></i> Home</a>
                <a className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="../ExploreScreen/oldExplore.html">
                    <i className="fas fa-hashtag"></i> Explore</a>
                <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="../notifications.html">
                    <i className="far fa-bell"></i> Notifications</a>
                <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="../messages.html">
                    <i className="far fa-envelope"></i> Messages</a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="../oldBookmarks.html">
                    <i className="far fa-bookmark"></i> Bookmarks</a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="../lists.html">
                    <i className="far fa-list-alt"></i> Lists</a>
                <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="../oldProfile.html">
                    <i className="far fa-user"></i> Profile</a>
                <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="../more.html">
                    <i className="fas fa-ellipsis-h"></i> More</a>
            </div>
            <div className="d-grid mt-2">
                <a href="../oldTuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
*/

const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return(
      <>
        <div className="list-group">
          <Link to="/"
                className="list-group-item">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/tuiter/home"
                className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
            <i className="fa fa-home"></i>
            <span className="d-none d-xl-inline">Home</span>
          </Link>
          <Link to="/tuiter/explore"
                className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
            <i className="fa fa-hashtag"></i>
            <span className="d-none d-xl-inline">Explore</span>
          </Link>
          <Link to="/tuiter/notifications"
                className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
            <i className="far fa-bell"></i>
            <span className="d-none d-xl-inline">Notifications</span>
          </Link>
          <Link to="/tuiter/messages"
                className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
            <i className="far fa-envelope"></i>
            <span className="d-none d-xl-inline">Messages</span>
          </Link>
          <Link to="/tuiter/bookmarks"
                className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
            <i className="far fa-bookmark"></i>
            <span className="d-none d-xl-inline">Bookmarks</span>
          </Link>
          <Link to="/tuiter/lists"
                className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
            <i className="far fa-list-alt"></i>
            <span className="d-none d-xl-inline">Lists</span>
          </Link>
          <Link to="/tuiter/profile"
                className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
            <i className="far fa-user"></i>
            <span className="d-none d-xl-inline">Profile</span>
          </Link>
          <Link to="/tuiter/more"
                className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
            <i className="fas fa-ellipses-h"></i>
            <span className="d-none d-xl-inline">More</span>
          </Link>
        </div>
        <div className="d-grid mt-2">
          <Link to="/tuiter/tuit"
                className={`btn btn-primary btn-block rounded-pill`}>
            <span className="d-none d-xl-inline">Tuit</span>
          </Link>
        </div>
      </>
  );
}
export default NavigationSidebar;