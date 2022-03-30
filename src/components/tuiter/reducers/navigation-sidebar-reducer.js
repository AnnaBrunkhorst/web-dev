// haven't figured this out - should be similar to like-tuit, but how to refactor the element
// without a json to refactor?

const navReducer =
    (state, active, action) => {
      switch (action.type) {
        case 'reload':

        default:
          return active
      }
    }

export default navReducer;