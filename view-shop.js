import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const div = document.getElementById("shop-view");

async function loadShops() {
  const ref = collection(db, "shops");
  const snapshot = await getDocs(ref);

  if (snapshot.empty) {
    div.innerHTML = "<p>No shop data available.</p>";
    return;
  }

  snapshot.forEach((doc) => {
    const d = doc.data();
    div.innerHTML += `
      <div class="shop-detail">
        <b>Shop Name:</b> ${d.name}<br>
        <b>Category:</b> ${d.category}<br>
        <b>Floor:</b> ${d.floor}<br>
        <b>Location:</b> ${d.location || "Not given"}
      </div>
    `;
  });
}
loadShops();
