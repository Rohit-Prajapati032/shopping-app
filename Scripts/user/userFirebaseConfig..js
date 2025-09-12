  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-getAnalytics.js";
  // import {getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-getFirestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyALkEN_4xPUeBPPcpaJdgQnwXJOhdwdyps",
    authDomain: "e-commarce-app-7f8dd.firebaseapp.com",
    projectId: "e-commarce-app-7f8dd",
    storageBucket: "e-commarce-app-7f8dd.firebasestorage.app",
    messagingSenderId: "627116090410",
    appId: "1:627116090410:web:f4e0de7e4838bdde2e8f53"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // export const db = getFirestore(app);