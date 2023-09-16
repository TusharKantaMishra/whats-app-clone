import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJp8rkZSJfjjLflGGyz_jW93fTFs91X70",
    authDomain: "whatsapp-clone-36ad1.firebaseapp.com",
    projectId: "whatsapp-clone-36ad1",
    storageBucket: "whatsapp-clone-36ad1.appspot.com",
    messagingSenderId: "1075843875753",
    appId: "1:1075843875753:web:a7f9fa688c0a30dfe53ab8",
    measurementId: "G-BE246R4661"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthprovider();

  export { auth, provider };
  export default db;