import {SET_FIREBASE_DB} from "../actions/FirebaseActions";

const initialState = {
  areaChart: {}
};

const FirebaseReducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_FIREBASE_DB: {
      return {
        ...state,
        areaChart: action.areaChart
      };
    }
    default: {
      return state;
    }
  }
};

export default FirebaseReducer;
