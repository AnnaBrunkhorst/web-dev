import PostSummaryItem from "./post-summary-item.js";
import posts from "./posts.json"
import React from "react";

const PostSummaryList = () => {
  return (
            <div className="d-block">
              {posts.map(posts => {return(<PostSummaryItem post={posts}/>);})}
            </div>
); }

export default PostSummaryList;