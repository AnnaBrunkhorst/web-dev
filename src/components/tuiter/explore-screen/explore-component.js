import PostSummaryList from "../post-summary-list/index";
import React from "react";

const ExploreComponent = () => {
  return(
      <>
           <div className="wd-row">
              <div
                  className="wd-left-margin wd-top-margin wd-dark-gray-bg wd-white-fg wd-rounded-corners wd-search-bar wd-float-left wd-padded-left">
                <i className="fas fa-search"></i>
                <input type="text"
                       className="wd-dark-gray-bg wd-white-fg wd-rounded-corners wd-search-bar-inside"
                       placeholder="Search Tuiter"></input>
              </div>
              <a href="explore-settings.html">
                <img className="wd-top-margin wd-right-margin wd-float-right wd-40-by-40"
                       src={require("./gear.webp")}/>
              </a>
           </div>
           <div className="wd-row">
              <a href="for-you.html"
                 className="wd-float-left wd-blue-fg wd-15px-font wd-padded-less-bottom wd-blue-bottom-border wd-no-text-deco">
                For you
              </a>
              <a href="trending.html"
                 className="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                Trending
              </a>
              <a href="news.html"
                 className="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                News
              </a>
              <a href="sports.html"
                 className="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                Sports
              </a>
              <a href="entertainment.html"
                 className="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                Entertainment
              </a>
           </div>
           <div className="container">
             <img className="wd-width-100perc"
                    src={require("./starship.png")}/>
             <h1 className="wd-text-on-image wd-white-fg">SpaceX's Starship</h1>
           </div>
           {<PostSummaryList/>}
        </>
    );
}
export default ExploreComponent;
