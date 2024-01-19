// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpYqTQRKONLv8mRe_VKedlPEJKwZrxSM0",
  authDomain: "booksclub-b2774.firebaseapp.com",
  projectId: "booksclub-b2774",
  storageBucket: "booksclub-b2774.appspot.com",
  messagingSenderId: "345340879547",
  appId: "1:345340879547:web:6b051f2617b38729597f9e",
  url:"https://booksclub-b2774-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
