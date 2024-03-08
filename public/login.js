// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import{
  ref,
  set,
  getDatabase,
  push,
  onValue
}from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdHnPsY3z2tQGrfY7UjhbEf4Lx41KLCaw",
  authDomain: "caculator-a1600.firebaseapp.com",
  databaseURL: "https://caculator-a1600-default-rtdb.firebaseio.com",
  projectId: "caculator-a1600",
  storageBucket: "caculator-a1600.appspot.com",
  messagingSenderId: "121318252666",
  appId: "1:121318252666:web:26eae60cc35bd391b6dbc3",
  measurementId: "G-K560VSP29D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
constauth = getAuth();

var model = {}


var emai = document.getElementById("email")
var password = document.getElementById("password")

window.singnup = function 
(e){
    model.email = email.value;
    model.password = password.value;

    console.log(model);
   signInWithEmailAndPassword(auth,model.email,model.password)
    .then(function(res){
        console.log(res.user.uid,"success Response");
        model.id = res.user.uid;
        var reference = ref(database, `user/${model.id}`);
        onValue(reference,function(user){
            console.log(user.val());
        });
        
        email.value ="";
        
        password.value = "";
    }) 
    .catch(function(err){
            console.log(err,"Err Response")
            alert(err.message);
        });
};