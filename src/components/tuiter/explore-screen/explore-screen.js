import NavigationSidebar from "../navigation-sidebar/index";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../who-to-follow-list/index";
import React from "react";

const ExploreScreen = () => {
  return(
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          {<NavigationSidebar active={"explore"}/>}
        </div>
        <div className="col-10 col-lg-7 wd-dark-gray-border-sides">
          {<ExploreComponent/>}
        </div>
        <div
            className="wd-absolute d-none d-md-none d-lg-block col-lg-3 col-xl-3">
          {<WhoToFollowList/>}
        </div>
      </div>
  )
}

export default ExploreScreen;
