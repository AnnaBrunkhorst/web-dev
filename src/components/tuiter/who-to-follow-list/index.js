import WhoToFollowListItem from "./who-to-follow-list-item";
// import who from "../data/who.json"
import {useSelector} from "react-redux";
import React, {useState} from "react";

const WhoToFollowList = () => {
  const whos = useSelector((state) => state.whos);
  const [who, setWho] = useState();
  return (
      <div>
        {
          whos.map(who =>
              <WhoToFollowListItem who={who}/>
          )
        }
      </div>
  );
};

export default WhoToFollowList;

/*
            <ul className="list-group">
            {who.map(who => {return(<WhoToFollowListItem who={who}/>);})}
            </ul>
 */