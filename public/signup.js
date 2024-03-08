// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword
 } from "firebase-auth.js";
 import { 
    ref,
    set,
    getDatabase,
    push,
    onValue
  } from "firebase-database.js"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZa5RNYalCA97ArDvpJx0R_ycqmAqstAM",
  authDomain: "todo-app-a67a7.firebaseapp.com",
  databaseURL: "https://todo-app-a67a7-default-rtdb.firebaseio.com",
  projectId: "todo-app-a67a7",
  storageBucket: "todo-app-a67a7.appspot.com",
  messagingSenderId: "248760592972",
  appId: "1:248760592972:web:b55e23c4dac02ac00922e9",
  measurementId: "G-L1PF4EVY1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const database = getDatabase();
constauth = getAuth();

var model = {}

var userName = document.getElementById("userName")
var emai = document.getElementById("email")
var password = document.getElementById("password")

window.singnup = function 
(e){
    model.userName = userName.value;
    model.password = password.value;

    console.log(model);
    createUserWithEmailAndPassword(auth,model.email,model.password)
    .then(function(res){
        console.log(res.user.uid,"success Response");
        model.id = res.user.uid;
        var reference = ref(database, `user/${model.id}`);
        set(reference,model)
        .then(function(dbres){
            alert("user created succesfully");
        })
        .catch(function(dbErr){
            alert(dbErr.message);
        });
        email.value ="";
        userName.value ="";
        password.value = "";
    }) 
    .catch(function(err){
            console.log(err,"Err Response")
            alert(err.message);
        });
};