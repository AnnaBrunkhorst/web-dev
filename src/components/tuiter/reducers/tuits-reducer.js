import tuits from '../data/tuits.json';

const tuitsReducer =
    (state = tuits, action) => {
      switch (action.type) {
        case 'like-tuit':
          return state.map(post => {
            if(post.id === action.post.id) {
              if(post.liked === true) {
                post.liked = false;
                post.stats.likes--;
              } else {
                post.liked = true;
                post.stats.likes++;
              }
              return post;
            } else {
              return post;
            }
          });
        case 'delete-tuit':
          return state.filter(
              post => post.id !== action.post.id);
        case 'create-tuit':
          const newTuit = {
            post: action.post,
            id: (new Date()).getTime() + '',
            postedBy: {
              "username": "ReactJS"
            },
            stats: {
              retuits: 111,
              likes: 222,
              comments: 333
            },
            attachments: {
              video: "",
              image: "",
            },
            avatarimage: "./muskpfp.png",
            time: "now",
            liked: false,
          }
          return [
            newTuit,
            ...state,
          ];
        default:
          return tuits
      }
    }

export default tuitsReducer;