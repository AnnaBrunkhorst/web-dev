import React from "react";

const WhoToFollowListItem = (
    {
      who = {
        avatarIcon: './nasa.png',
        userName: 'NASA',
        handle: 'NASA',
      }
    }) => {
  return(
    <div className="row wd-rtl">
      <div className="col wd-vert-center wd-no-wrap">
        <img className="wd-float-left wd-50-by-50 wd-rounded-corners-50"
               src={require("" + who.avatarIcon)}/>
        <span className="wd-white-fg wd-bold">
          {who.userName} <i className="fas fa-check-circle"></i>
        </span>
        <br/>
        <span className="wd-gray-fg">
          @{who.handle}
        </span>
      </div>
      <div className="col-auto wd-vert-center">
        <a href=""
           className="btn wd-button-bs-override-white wd-vert-center">
          Follow
        </a>
      </div>
    </div>);
}

export default WhoToFollowListItem;