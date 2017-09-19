let initialState = {
  loggedInUser: 'Ida'
}

export default function ageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGGEDINUSER':
      return {
        ...state,
        loggedInUser: action.user,
      };
    default:
      return state;
  }
}