document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("❌ Email and password are required!");
      return;
    }

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters!");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("✅ Registered successfully! Redirecting to login...");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("❌ " + error.message);
      });
  });
