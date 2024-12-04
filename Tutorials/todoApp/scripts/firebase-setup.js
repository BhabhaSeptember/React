import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyDpUN1aI46oOp30IQrOJaxIfQjIdfhjLhc",
   authDomain: "todoapp-33fff.firebaseapp.com",
   projectId: "todoapp-33fff",
   storageBucket: "todoapp-33fff.firebasestorage.app",
   messagingSenderId: "63373854432",
   appId: "1:63373854432:web:95eb771ec3c905d986f285",
   measurementId: "G-2VJG95E9NP",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app); //setting up connection between front end and back end
 const auth = getAuth(app);
 const db = getFirestore(app);

 export { auth, db };