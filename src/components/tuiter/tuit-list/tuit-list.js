import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
// import * as service from "../services/tuits-service"
import {deleteTuit, findAllTuits} from
      "../actions/tuits-actions";
import TuitListItem
  from "./tuit-list-item";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
// import './tuits.css';

const TuitList = () => {
  const tuits = useSelector(
      (state) => state.tuits);
  const dispatch = useDispatch();
  // const findAllTuits = async () => {
  //   const tuits = await service.findAllTuits();
  //   dispatch({
  //     type: 'FIND_ALL_TUITS',
  //     tuits: tuits
  //   });
  // }
  // useEffect(findAllTuits, []);
  useEffect(() =>
  findAllTuits(dispatch),
  []);
  // findAllTuits list item below is just an attempt to see if any tuits are being retrieved
  // at all; the only list item that shows on the site is [object Promise], so probably not
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