import React, {useState} from "react";
import {useDispatch}
  from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] =
      useState({post: 'New tuit'});
  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  return (
      <>
        <div className="wd-row">
          <img
              className="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48"
              src={require("./muskpfp.png")}/>
          <p className="wd-float-left wd-left-margin-12 wd-top-bottom-margin">
            <textarea
                className="wd-black-bg wd-white-fg wd-float-left wd-width-554"
                placeholder="What's happening?"
                onChange={(e) =>
                    setNewTuit({
                      ...newTuit,
                      id: (new Date()).getTime() + '',
                      topic: "Web Development",
                      postedBy: {
                        username: "Anna"
                      },
                      liked: false,
                      disliked: false,
                      verified: false,
                      handle: "annab",
                      time: "now",
                      title: "",
                      tuit: e.target.value,
                      attachments: {
                        video: "",
                        image: ""
                      },
                      logoimage: "./muskpfp.png",
                      avatarimage: "./muskpfp.png",
                      stats: {
                        comments: 0,
                        retuits: 0,
                        likes: 0,
                        dislikes: 0
                      }
                    })}></textarea>
            {/*  <textarea value={whatsHappening}*/}
            {/*            placeholder={"What's happening?"}*/}
            {/*            className={"wd-black-bg wd-white-fg wd-float-left wd-width-554"}*/}
            {/*            onChange={(event) =>*/}
            {/*                setWhatsHappening(event.target.value)}>*/}
            {/*</textarea>*/}
          </p>
        </div>

        <div className="wd-row">
          <a href="#">
            <i className="fas fa-image wd-float-left wd-left-margin-plus-pic wd-blue-fg"></i>
          </a>
          <a href="#">
            <i className="fas fa-chart-line wd-float-left wd-left-margin wd-blue-fg"></i>
          </a>
          <a href="#">
            <i className="fas fa-smile wd-float-left wd-left-margin wd-blue-fg"></i>
          </a>
          <a href="#">
            <i className="fas fa-calendar wd-float-left wd-left-margin wd-blue-fg"></i>
          </a>
          <button onClick={() =>
              createTuit(dispatch, newTuit)}
                  className="btn btn-primary btn-block rounded-pill wd-left-margin-560">
            Tuit
          </button>
          {/*<button onClick={tuitClickHandler}*/}
          {/*        className={`btn btn-primary btn-block rounded-pill wd-left-margin-560`}>*/}
          {/*  Tuit*/}
          {/*</button>*/}
        </div>
      </>
  );
}
export default WhatsHappening;