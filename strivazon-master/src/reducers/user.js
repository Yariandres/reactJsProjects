export default function(state = null, action) {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
}
