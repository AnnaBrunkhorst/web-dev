// import tuits from '../data/tuits.json';

// const tuitsReducer =
//     (state = tuits, action) => {
//       switch (action.type) {
//         case 'like-tuit':
//           return state.map(post => {
//             if(post.id === action.post.id) {
//               if(post.liked === true) {
//                 post.liked = false;
//                 post.stats.likes--;
//               } else {
//                 post.liked = true;
//                 post.stats.likes++;
//               }
//               return post;
//             } else {
//               return post;
//             }
//           });
//         case 'delete-tuit':
//           return state.filter(
//               post => post.id !== action.post.id);
//         case 'create-tuit':
//           const newTuit = {
//             post: action.post,
//             id: (new Date()).getTime() + '',
//             postedBy: {
//               "username": "ReactJS"
//             },
//             stats: {
//               retuits: 111,
//               likes: 222,
//               comments: 333
//             },
//             attachments: {
//               video: "",
//               image: "",
//             },
//             avatarimage: "./muskpfp.png",
//             time: "now",
//             liked: false,
//           }
//           return [
//             newTuit,
//             ...state,
//           ];
//         default:
//           return tuits
//       }
//     }

import {CREATE_TUIT, DELETE_TUIT, UPDATE_TUIT, FIND_ALL_TUITS} from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case DELETE_TUIT:
      return state.filter(
          tuit => tuit._id !== action.tuit._id);
    case CREATE_TUIT:
      return [
        ...state,
        action.newTuit
      ];
    case UPDATE_TUIT:
      return state.map(
          tuit => tuit._id === action.tuit._id ?
              action.tuit : tuit);
    default:
      return state;
  }
}

export default tuitsReducer;