import React from "react";

const PostSummaryItem = (
    {
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "./react-blue.png"
      }
    }) => {
  return(
    <div className="wd-row">
      <p className="wd-float-left wd-padded wd-gray-fg wd-13px-font wd-full-width-minus-pic wd-remove-margins">
        {post.topic}
        <br/>
        <span className="wd-white-fg wd-bold">{post.userName}<i className="fas fa-check-circle"></i></span> - {post.time}
        <br/>
        <span className="wd-white-fg wd-15px-font wd-bold">
          {post.title}
        </span>
      </p>
      <img className="wd-float-right wd-padded wd-100-by-100 wd-rounded-corners-30"
             src={require("" + post.image)}/>
      <div className="wd-row"/>
    </div>);
}

export default PostSummaryItem;