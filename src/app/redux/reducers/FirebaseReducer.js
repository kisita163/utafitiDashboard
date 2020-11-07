import {SET_FIREBASE_DB} from "../actions/FirebaseActions";

const initialState = {
  data: {}
};

const FirebaseReducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_FIREBASE_DB: {
      return {
        ...state,
        data: action.data
      };
    }
    default: {
      return state;
    }
  }
};

export default FirebaseReducer;
