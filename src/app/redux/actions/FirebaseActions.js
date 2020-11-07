import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import APIClient from "../../services/api/apiClient"

export const SET_FIREBASE_DB = "SET_FIREBASE_DB";

export function readFirebaseDatabase(reference) {

  return dispatch => {
      
      FirebaseAuthService.getDataBase(reference).on("value", snapshot => {
 
        const apiClient = new APIClient("");
        
        apiClient.getAreaChart().then((data) => {
          dispatch({
            type: SET_FIREBASE_DB,
            areaChart: data
          });
        });
    });
  };
}