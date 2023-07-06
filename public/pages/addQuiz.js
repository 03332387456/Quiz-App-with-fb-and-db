// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getDatabase, set, ref , push } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOWQPo_hm0hbP4IuAMGqRsW1WrxbGuSQo",
  authDomain: "ahsans-project-9529c.firebaseapp.com",
  projectId: "ahsans-project-9529c",
  storageBucket: "ahsans-project-9529c.appspot.com",
  messagingSenderId: "477981511582",
  appId: "1:477981511582:web:10325d12fbdd8a8ae6108f",
  measurementId: "G-Y00B1PMEE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()



var question = document.getElementById("question")
var option = document.getElementById("option")
var optionparent = document.getElementById("optionparent")
var correctanswerElem = document.getElementById("correctanswer")

var options = []
var correctanswer 

function renderaoption() {
    optionparent.innerHTML = ""
    for (let i = 0; i < options.length; i++) {
       optionparent.innerHTML += `<li onclick="SetCorrectAnswers('${options[i]}')" class ="p-3 bg-light fs-4 rounded sahdow my-2" >${options[i]}</li>` 
    }
}

window.addQuestion = function() {
  options.push(option.value)
  console.log(options);
  option.value = ""
  renderaoption()
};



window.SetCorrectAnswers = function (a) {
  correctanswer = a
  correctanswerElem.innerHTML = correctanswer
}

window.SubmitQuestion  = function () {
  var obj = {
    question : question.value,
    options : options,
    correctanswer : correctanswer
  }



obj.id = push(ref(db, "questions/")) .key

  const reference = ref(db, `questions/${obj.id}`)

set(reference , obj)

  console.log(obj);
}