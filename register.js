import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5FRswePB49jo2oDiT21eUdCsQhtarZok",
    authDomain: "workoutllama.firebaseapp.com",
    projectId: "workoutllama",
    storageBucket: "workoutllama.firebasestorage.app",
    messagingSenderId: "1070485154156",
    appId: "1:1070485154156:web:048fe38c347a5e59ee2b49",
    measurementId: "G-GPYN67YV1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Elements for account creation form
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const submit1 = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");

const main = document.getElementById("main");

// Event listener for return button
returnBtn.addEventListener("click", function() {
    window.location.href = "login.html";  // Adjust the file path if needed
});

// Event listener for the account creation button
submit1.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent default form submission

    let isVerified = true;

    // Check if email fields match
    const signupEmail = signupEmailIn.value;
    const confirmSignupEmail = confirmSignupEmailIn.value;
    if (signupEmail !== confirmSignupEmail) {
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    // Check if password fields match
    const signupPassword = signupPasswordIn.value;
    const confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (signupPassword !== confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    // Check if all fields are filled
    if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    // If all checks are passed, create the user
    if (isVerified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                // Account created successfully
                const user = userCredential.user;
                window.location.replace("fillout.html"); // Redirect to fillout page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert("Error occurred. Please try again.");
            });
    }
});
