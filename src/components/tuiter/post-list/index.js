import PostItem from "./post-item.js";
import posts from "./posts.json"
import React from "react";

const PostList = () => {
  return (
            <div class="d-block">
              {posts.map(posts => {return(<PostItem post={posts}/>);})}
            </div>
); }

export default PostList;