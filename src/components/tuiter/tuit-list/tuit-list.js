import React from "react";
// import tuits from "../data/tuits.json";
import {useSelector} from "react-redux";
import TuitListItem
  from "./tuit-list-item";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
// import './tuits.css';

const TuitList = () => {
  const tuits = useSelector(
      (state) => state.tuits);

  return (
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(post =>
              <TuitListItem key={post.id}
                            post={post}/>)
        }
      </ul>
  );
}

export default TuitList;