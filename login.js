import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5FRswePB49jo2oDiT21eUdCsQhtarZok",
    authDomain: "workoutllama.firebaseapp.com",
    projectId: "workoutllama",
    storageBucket: "workoutllama.firebasestorage.app",
    messagingSenderId: "1070485154156",
    appId: "1:1070485154156:web:048fe38c347a5e59ee2b49",
    measurementId: "G-GPYN67YV1R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Only sign-in related elements
const submitButton = document.getElementById("submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Add an event listener to the sign-up button
document.getElementById("return-btn").addEventListener("click", function() {
    window.location.href = "register.html";  // Adjust the file path if needed
});


// Submit on button click
submitButton.addEventListener("click", submitForm);

// Submit on pressing Enter in email or password input
emailInput.addEventListener("keypress", handleKeyPress);
passwordInput.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "Enter") {
    submitForm();
  }
}

function submitForm() {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      window.location.replace("dashboard.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
}
