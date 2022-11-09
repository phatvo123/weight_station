// setting up firebase with our website
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT9Jm0ObdHVUhjYTbUXFTraRukK3cQyPg",
    authDomain: "phatttttt-3336d.firebaseapp.com",
    databaseURL: "https://phatttttt-3336d.firebaseio.com",
    projectId: "phatttttt-3336d",
    storageBucket: "phatttttt-3336d.appspot.com",
    messagingSenderId: "465952679511",
    appId: "1:465952679511:web:6114fa212edc4d0966a512",
    measurementId: "G-E42TYWF65T"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}
// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("You are Signed In")
            window.location.assign("vehicle_registration.html")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}