import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
  $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('explore')}
        </div>
        <div class="col-10 col-lg-7 wd-dark-gray-border-sides">
            ${ExploreComponent()}
        </div>
        <div class="wd-absolute d-none d-md-none d-lg-block col-lg-3 col-xl-3">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
