import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
  return (`
            <div class="d-block">
            <!-- continue here -->
            ${posts.map(posts => {return(PostSummaryItem(posts))}).join('')}
            </div>
`); }

export default PostSummaryList;