import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
           <div class="wd-row">
                       <!-- search field and cog -->
              <div
                  class="wd-left-margin wd-top-margin wd-dark-gray-bg wd-white-fg wd-rounded-corners wd-search-bar wd-float-left wd-padded-left">
                <i class="fas fa-search"></i>
                <input type="text"
                       class="wd-dark-gray-bg wd-white-fg wd-rounded-corners wd-search-bar-inside"
                       placeholder="Search Tuiter"></input>
              </div>
              <a href="explore-settings.html">
                <image class="wd-top-margin wd-right-margin wd-float-right wd-40-by-40"
                       src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/21-512.png"/>
              </a>
           </div>
           <div class="wd-row">
                      <!-- tabs -->
              <a href="for-you.html"
                 class="wd-float-left wd-blue-fg wd-15px-font wd-padded-less-bottom wd-blue-bottom-border wd-no-text-deco">
                For you
              </a>
              <a href="trending.html"
                 class="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                Trending
              </a>
              <a href="news.html"
                 class="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                News
              </a>
              <a href="sports.html"
                 class="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                Sports
              </a>
              <a href="entertainment.html"
                 class="wd-float-left wd-gray-fg wd-15px-font wd-padded wd-no-text-deco">
                Entertainment
              </a>
           </div>
           <!-- image with overlaid text -->
           <div class="container">
             <image class="wd-width-100perc"
                    src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
             <h1 class="wd-text-on-image wd-white-fg">SpaceX's Starship</h1>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
