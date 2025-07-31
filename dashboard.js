firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("userEmail").innerText =
      "Logged in as: " + user.email;
  } else {
    alert("Please login first.");
    window.location.href = "login.html";
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("Logged out.");
      window.location.href = "login.html";
    });
}
