// import { db, auth } from "./firebase-setup.js";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   onSnapshot,
// } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// import { setupTodos } from './index.js';
// import { setupUI } from './index.js';

// //================= AUTH STATE CHANGES =================
// // auth.onAuthStateChanged((user) => {
// //   console.log(user);
// //   if (user) {
// //     //get data from backend database to frontend browser
// //     const todosRef = collection(db, "todos");
// //     onSnapshot(
// //       todosRef,
// //       (snapshot) => {
// //         setupTodos(snapshot.docs);
// //         setupUI(user);
// //       },
// //       (error) => {
// //         console.log(error.message);
// //       }
// //     );
// //   } else {
// //     setupUI(null);
// //     setupTodos([]); //if not logged in
// //   }
// // });

// auth.onAuthStateChanged((user) => {
//     console.log(user); // Debug to ensure user is available
//     if (user) {
//         setupUI(user); // Ensure setupUI is called with the user object
//         // Your existing code to fetch todos
//         const todosRef = collection(db, "todos");
//         onSnapshot(todosRef, (snapshot) => {
//             setupTodos(snapshot.docs);
//         });
//     } else {
//         setupUI(null); // When no user is logged in
//         setupTodos([]); // Clear todos if logged out
//     }
// });


// //================= CREATE TODO =================
// const createForm = document.querySelector("#create-form");
// createForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   addDoc(collection(db, "todos"), {
//     title: createForm["title"].value,
//     content: createForm["content"].value,
//   })
//     .then(() => {
//       const modal = document.querySelector("#modal-create");
//       M.Modal.getInstance(modal).close();
//       createForm.reset();
//     })
//     .catch((error) => {
//       console.log("Error: ", error.message);
//     });
// });

// //================= SIGNUP =================
// const signupForm = document.querySelector("#signup-form");
// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault(); //prevents refresh action of the page upon submission

//   //get user info from the form
//   const email = signupForm["signup-email"].value;
//   const password = signupForm["signup-password"].value;

//   //user signup
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//       return addDoc(collection(db, "users"), {
//         uid: cred.user.uid,
//         bio: signupForm['signup-bio'].value,
//       });
//     })
//     .then(() => {
//       //user credential token
//       const modal = document.querySelector("#modal-signup");
//       M.Modal.getInstance(modal).close();
//       signupForm.reset();
//     })
//     .catch((error) => {
//       console.error("Error during sign-up:", error.message);
//     });
// });

// // ================= LOGOUT =================
// const logout = document.querySelector("#logout");
// logout.addEventListener("click", (e) => {
//   e.preventDefault();

//   auth.signOut();
// });

// // ================= LOGIN =================
// const loginForm = document.querySelector("#login-form");
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   //get user info
//   const email = loginForm["login-email"].value;
//   const password = loginForm["login-password"].value;

//   signInWithEmailAndPassword(auth, email, password).then((cred) => {
//     const modal = document.querySelector("#modal-login");
//     M.Modal.getInstance(modal).close();
//     loginForm.reset();
//   });
// });


//====================================================================================
//************************************************************************************* */
/******************************************  SOURCE ************************************* */
/******************************************         ************************************** */
/******************************************  CODE   *************************************** */
/************************************************************************************* */

import { db, auth } from "./firebase-setup.js";
import { setupUI, setupTodos } from './index.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


// listen for auth status changes

onAuthStateChanged(auth, (user) => {

    if (user) {
        const todosRef = collection(db, 'todos');
        onSnapshot(todosRef, (snapshot) => {
                setupTodos(snapshot.docs);
        setupUI(user);
      }, err => console.log(err.message));
    } else {
      setupUI();
      setupTodos([]);
    }
  });
  
  // create new todo
  const createForm = document.querySelector('#create-form');
  createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(collection(db, 'todos'), {
        title: createForm.title.value,
        content: createForm.content.value,
      }).then(() => {
      
      // close the create modal & reset form
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createForm.reset();
    }).catch(err => {
      console.log(err.message);
    });
  });
  
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
  
    // sign up the user & add firestore data
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        return setDoc(doc(db, 'users', cred.user.uid), {
            bio: signupForm['signup-bio'].value,
          });
    })
    .then(() => {
      // Close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
  
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    signInWithEmailAndPassword(auth, email, password)
  .then((cred) => {
    // Close the login modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  })
  .catch((error) => {
    console.error("Error logging in:", error.message);
  });

  
  });

/************************************************************************************* */
/************************************************************************************* */
