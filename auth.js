// js/auth.js

firebase.auth().onAuthStateChanged((user) => {
  // Optional: if already logged in, redirect to dashboard
  if (user) {
    console.log("Already logged in as:", user.email);
    // window.location.href = "dashboard.html";
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}

function register() {
  const email = prompt("Enter email to register:");
  const password = prompt("Enter password (min 6 characters):");

  if (!email || !password) {
    alert("Email and password are required.");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Registered successfully! Now login.");
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}
