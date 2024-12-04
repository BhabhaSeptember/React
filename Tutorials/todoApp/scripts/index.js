// import { db } from './firebase-setup.js';
// import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


// const todoList = document.querySelector(".todos");
// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');
// const accountDetails = document.querySelector('.account-details');

// export const setupUI = (user) => {
//     if (user) {
//         //account info
//         const userDocRef = doc(db, "users", user.uid);
//         getDoc(userDocRef).then((docSnap) => {
//             if (docSnap.exists()) {
//             const html = `
//             <div> Logged in as ${user.email} </div>
//             <div>${docSnap.data().bio}</div>
//             `;
//             accountDetails.innerHTML = html;
//         } else {
//             console.log("No such document exists!");
//         }
//     });
        

//         loggedInLinks.forEach(item => item.style.display= 'block');
//         loggedOutLinks.forEach(item => item.style.display = 'none');

//     } else {
//         accountDetails.innerHTML = '' ;
//         loggedInLinks.forEach(item => item.style.display= 'none');
//         loggedOutLinks.forEach(item => item.style.display = 'block');
//     }
// }
// //setup todos
// export const setupTodos = (data) => {
  
// if (data.length) {
//   let html = "";
//   data.forEach((doc) => {
//     const todo = doc.data();
//     const li = `
//         <li>
//             <div class="collapsible-header grey lighten-4">${todo.title}</div>
//             <div class="collapsible-body white">${todo.content}</div>
//         </li>
//         `;
//       html += li ;  
//   });

// todoList.innerHTML = html; //outputting database documents onto browser/DOM
// } else {
//     todoList.innerHTML = '<h5 class="center-align">Login to view the Todo Dashboard!</h5>'
// }};

// // setup materialize components
// document.addEventListener("DOMContentLoaded", function () {
//   var modals = document.querySelectorAll(".modal");
//   //NOTE: M = materialized library . Modal property from library
//   M.Modal.init(modals);

//   var items = document.querySelectorAll(".collapsible");
//   M.Collapsible.init(items);
// });





//=============

import { db } from './firebase-setup.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// DOM elements
const todoList = document.querySelector('.todos');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = async (user) => {
    if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            const html = `
                <div>Logged in as ${user.email}</div>
                <div>${userDoc.data().bio}</div>
            `;
            accountDetails.innerHTML = html;
        } else {
            console.log("No such document!");
        }
        // toggle user UI elements
        loggedInLinks.forEach((item) => (item.style.display = 'block'));
        loggedOutLinks.forEach((item) => (item.style.display = 'none'));
    } else {
        accountDetails.innerHTML = '';
        loggedInLinks.forEach((item) => (item.style.display = 'none'));
        loggedOutLinks.forEach((item) => (item.style.display = 'block'));
    }
};

// setup todos
const setupTodos = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const todo = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${todo.title} </div>
          <div class="collapsible-body white"> ${todo.content} </div>
        </li>
      `;
      html += li;
    });
    todoList.innerHTML = html
  } else {
    todoList.innerHTML = '<h5 class="center-align">Login to view todos</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

export { setupUI, setupTodos};


