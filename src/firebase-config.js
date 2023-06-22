import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrN8KRP5O37D23l6unLB36o-KjKd4j9_0",
  authDomain: "ozik-project.firebaseapp.com",
  projectId: "ozik-project",
  storageBucket: "ozik-project.appspot.com",
  messagingSenderId: "18510298939",
  appId: "1:18510298939:web:dcb7868c9b47390eaf011e",
  measurementId: "G-MX67R6PWWR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// // firestore는 database관련, auth는 user authentication 관련된 기능

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// // GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.

// provider.setCustomParameters({ prompt: "select_account" });
// // signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.

// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// // signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// // 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

// export default firebase;
// // 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.