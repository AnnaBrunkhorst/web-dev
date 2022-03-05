import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
  return (`
            <div class="d-block">
            <!-- continue here -->
            ${posts.map(posts => {return(PostItem(posts))}).join('<div class="wd-row wd-dark-gray-border"/>')}
            </div>
`); }

export default PostList;