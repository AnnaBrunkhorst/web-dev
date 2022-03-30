import TuitList from "../tuit-list/tuit-list";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import tuitsReducer from "../reducers/tuits-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhatsHappening from "../whats-happening/whats-happening";

const reducers = combineReducers({tuits: tuitsReducer});
const store = createStore(reducers);

const HomeScreen = () => {
  return(
      <div>
        <WhatsHappening/>
        <TuitList/>
      </div>
  )
}
export default HomeScreen;