import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'

import { getAuth , createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'

import firebaseConfig from './firebaseConfig.js';

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);






const register = () => {
      const email = document.getElementById("email")
      const password = document.getElementById("password")

    console.log(email.value , password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user--->" , user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage" , errorMessage);
      alert(errorMessage)
    });

    

}


let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click" , register);



