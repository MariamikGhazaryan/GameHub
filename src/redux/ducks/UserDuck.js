const CHANGE_CURRENT_USER = "userDuck/CHANGE_CURRENT_USER";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const changeCurrentUserAction = (payload) => ({
  type: CHANGE_CURRENT_USER,
  payload,
});

const UserDuck = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};

export default UserDuck;
