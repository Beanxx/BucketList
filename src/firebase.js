//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-qspDXwWP6kbS5bub9Zl9V7bC75kbkks",
  authDomain: "sparta-react-49ba9.firebaseapp.com",
  projectId: "sparta-react-49ba9",
  storageBucket: "sparta-react-49ba9.appspot.com",
  messagingSenderId: "887873001097",
  appId: "1:887873001097:web:22631050ff4d7412675858",
  measurementId: "G-4YJM10NEL1",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
