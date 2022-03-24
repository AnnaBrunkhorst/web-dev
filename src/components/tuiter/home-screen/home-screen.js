import NavigationSidebar from "../navigation-sidebar/index";
import PostList from "../post-list/index";
import PostSummaryList from "../post-summary-list/index";
import React from "react";

const HomeScreen = () => {
  return(
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          {<NavigationSidebar active={"home"}/>}
        </div>
        <div className="col-10 col-lg-7">
          {<PostList/>}
        </div>
        <div
            className="wd-absolute d-none d-md-none d-lg-block col-lg-3 col-xl-3">
          {<PostSummaryList/>}
        </div>
      </div>
  )
}

export default HomeScreen;