import FirebaseAuthService from "../../services/firebase/firebaseAuthService";

export const SET_FIREBASE_DB = "SET_FIREBASE_DB";

export function readFirebaseDatabase(reference) {

  return dispatch => {
      
      FirebaseAuthService.getDataBase(reference).on("value", snapshot => {
        let data = []
        snapshot.forEach(snap => {
        data.push(snap.val())
      });
  
      dispatch({
        type: SET_FIREBASE_DB,
        data: data
      });
    });
  };
}