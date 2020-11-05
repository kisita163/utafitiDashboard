import FirebaseAuthService from "../../services/firebase/firebaseAuthService";

export const SET_FIREBASE_DB = "SET_FIREBASE_DB";

export function readFirebaseDatabase(reference) {
  
  const db = FirebaseAuthService.getDataBase(reference)
  
  db.on("value", snapshot => {
    snapshot.forEach(snap => {
      console.log(snap.val())
    });
  });

  return dispatch => {
    dispatch({
      type: SET_FIREBASE_DB,
      data: {test: "hugues"}
    });
  };
}


