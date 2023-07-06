// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getDatabase,ref,onChildAdded ,push } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

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



var loader = document.getElementById("loader")
var showQuestion = document.getElementById("showQuestion")



var questions = []; // Define the questions array as empty

function getDataFromDatabase() {

    loader.style.display = 'block'
    showQuestion.style.display = 'none'


    const reference =  (ref(db, 'questions/'));
    onChildAdded(reference, function(data) {
        console.log(data.val());
        questions.push(data.val());

        loader.style.display = 'none'
        showQuestion.style.display = 'block'

        rendarQuestions(); // Call the rendering function after data retrieval
    });
}

getDataFromDatabase();





var questions = []



var currentQuestions = document.getElementById("currentQuestions")
var totalQuestion = document.getElementById("totalQuestion")
var question = document.getElementById("question")
var Answers = document.getElementById("Answers")

var indexNum = 0
var score = 0 





window.nextQuestion = function() {
    indexNum++;
    if (indexNum < questions.length) {
        rendarQuestions();
    } else {
        alert("Quiz completed");
        document.getElementById("NextButton").disabled = true; 
    }
}



window.checkQuestion = function(a , b) {
    if(a == b){
        score++
        console.log(score);
    }
    nextQuestion()
}



function rendarQuestions() {
    currentQuestions.innerHTML = indexNum + 1;
    totalQuestion.innerHTML = questions.length;
    var obj = questions[indexNum];
    question.innerHTML = obj.question;

    // Loop through answers

    Answers.innerHTML = "";

    for (let i = 0; i < obj.options.length; i++) {
        Answers.innerHTML += `<div class="col-md-6">
            <div class="py-3">
                <button type="button" onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-info w-100">
                ${obj.options[i]}
                </button>
            </div>
        </div>`;
    }
}













