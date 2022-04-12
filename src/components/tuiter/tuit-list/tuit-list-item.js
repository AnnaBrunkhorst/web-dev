import React from "react";
import YouTube from "react-youtube";
import {useDispatch} from "react-redux";
import {deleteTuit, updateTuit} from "../actions/tuits-actions";

const vid = (id) => {
  if (id != "") {
    return (
        <div className="wd-row">
          <YouTube
              className="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-rounded-bottom-corners wd-width-504 wd-height-264"
              videoId={"" + id}/>
        </div>
    )
  }
}

const img = (path) => {
  if (path != "") {
    return (
        <div className="wd-row">
          <img
              className="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-rounded-bottom-corners wd-width-504 wd-height-264"
              src={require("" + path)}/>
        </div>
    )
  }
}

const TuitListItem = (
    {
      /*
  }
    post = {
      pfp: './muskpfp.png',
      userName: 'Elon Musk',
      handle: 'elonmusk',
      time: '23h',
      content: 'Amazing show about @Inspiration4x mission!',
      image: './spacesuit.png',
      linkTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
      linkContent: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...',
      link: 'netflix.com',
      comments: '4.2K',
      retuits: '3.5K',
      likes: '37.5K'
    }
*/
      post = {
        id: "123",
        topic: "Web Development",
        postedBy: {
          username: "ReactJS"
        },
        liked: true,
        verified: false,
        handle: "ReactJS",
        time: "2h",
        title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        attachments: {
          video: "unKvMC3Y1kI",
          image: null
        },
        logoimage: "./tesla.png",
        avatarimage: "./tesla.png",
        stats: {
          comments: 123,
          retuits: 234,
          likes: 345
        }
      }
    }) => {
      const dispatch = useDispatch();
      // const deleteTuit = (post) => {
      //   dispatch({type: 'delete-tuit', post})
      // };
      const likeTuit = () => {
        // dispatch({type: 'like-tuit', post});
        if (post.liked) {
          updateTuit(dispatch, {
            ...post,
            stats: {
              comments: post.stats.comments,
              retuits: post.stats.retuits,
              likes: post.stats.likes - 1,
              dislikes: post.stats.dislikes
            },
            liked: false
          })
        } else {
          updateTuit(dispatch, {
            ...post,
            stats: {
              comments: post.stats.comments,
              retuits: post.stats.retuits,
              likes: post.stats.likes + 1,
              dislikes: post.stats.dislikes
            },
            liked: true
          })
        }
      };
  const dislikeTuit = () => {
    if (post.disliked) {
      updateTuit(dispatch, {
        ...post,
        stats: {
          comments: post.stats.comments,
          retuits: post.stats.retuits,
          likes: post.stats.likes,
          dislikes: post.stats.dislikes - 1,
        },
        disliked: false
      })
    } else {
      updateTuit(dispatch, {
        ...post,
        stats: {
          comments: post.stats.comments,
          retuits: post.stats.retuits,
          likes: post.stats.likes,
          dislikes: post.stats.dislikes + 1,
        },
        disliked: true
      })
    }
  };

      return (
          <>
            <div className="wd-row">
              <img
                  className="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48"
                  src={require("" + post.avatarimage)}/>
              <p className="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
                <span className="wd-bold">{post.postedBy.username}</span> <span
                  className="wd-gray-fg">@{post.handle} - {post.time}</span>
                <br/>
                {post.tuit}
              </p>
              <i className="fas fa-times wd-white-fg wd-float-right"
                 onClick={() => deleteTuit(
                     dispatch, post)}></i>
              {/*<i onClick={() =>*/}
              {/*    deleteTuit(post)}*/}
              {/*   className="fas fa-times wd-white-fg wd-float-right"></i>*/}
            </div>

            {}

            {vid(post.attachments.video)}
            {img(post.attachments.image)}

            <div className="wd-row">
              <a href="#">
                <i className="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
                <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.stats.comments}</p>
              </a>
              <a href="#">
                <i className="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.stats.retuits}</p>
              </a>
              <span onClick={likeTuit}>
              {
                post.liked &&
                <i className="fas fa-heart wd-float-left wd-left-margin-80"
                   style={{color: 'red'}}></i>
              }
              {
                !post.liked &&
                <i className="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
              }
              {post.stats && <p
                  className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.stats.likes}</p>}
              </span>
              <span onClick={dislikeTuit}>
              {
                post.disliked &&
                <i className="fas fa-thumbs-down wd-float-left wd-left-margin-80"
                   style={{color: 'deepskyblue'}}></i>
              }
                {
                  !post.disliked &&
                  <i className="fas fa-thumbs-down wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                }
                {post.stats && <p
                    className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.stats.dislikes}</p>}
              </span>
              <a href="#">
                <i className="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
              </a>
            </div>
          </>
      );

      /*
      if (post.link != null) {
        return(
            <>
              <div className="wd-row">
                <img className="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48" src={require("" + post.pfp)}/>
                <p className="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
                  <span className="wd-bold">{post.userName}</span> <span className="wd-gray-fg">@{post.handle} - {post.time}</span>
                  <br/>
                  {post.content}
                </p>
                <i className="fas fa-ellipsis-h wd-float-right"></i>
              </div>

              <div className="wd-row">
                <img className="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-width-504 wd-height-264" src={require("" + post.image)}/>
              </div>

              <div className="wd-row">
                <p className="wd-float-left wd-left-margin-plus-pic wd-gray-fg wd-dark-gray-border-full wd-rounded-bottom-corners wd-width-504 wd-padded">
                  <span className="wd-white-fg wd-bold">{post.linkTitle}</span>
                  <br/>
                  {post.linkContent}
                </p>
              </div>

              <div className="wd-row">
                <a href="#">
                  <i className="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
                  <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.comments}</p>
                </a>
                <a href="#">
                  <i className="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                  <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.retuits}</p>
                </a>
                <a href="#">
                  <i className="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                  <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.likes}</p>
                </a>
                <a href="#">
                  <i className="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                </a>
              </div>
            </>
        ); }
      else {
        return(
            <>
              <div className="wd-row">
                <img className="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48" src={require("" + post.pfp)}/>
                <p className="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
                  <span className="wd-bold">{post.userName}</span> <span className="wd-gray-fg">@{post.handle} - {post.time}</span>
                  <br/>
                  {post.content}
                </p>
                <i className="fas fa-ellipsis-h wd-float-right"></i>
              </div>

              <div className="wd-row">
                <img className="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-rounded-bottom-corners wd-width-504 wd-height-264" src={require("" + post.image)}/>
              </div>

              <div className="wd-row">
                <a href="#">
                  <i className="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
                  <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.comments}</p>
                </a>
                <a href="#">
                  <i className="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                  <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.retuits}</p>
                </a>
                <a href="#">
                  <i className="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                  <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.likes}</p>
                </a>
                <a href="#">
                  <i className="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
                </a>
              </div>
            </>
        ); }
       */
    }
;

export default TuitListItem;