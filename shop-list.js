// js/shop-list.js
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const shopListDiv = document.getElementById("shop-list");

async function loadShops() {
  try {
    const ref = collection(db, "shops");
    const snapshot = await getDocs(ref);

    if (snapshot.empty) {
      shopListDiv.innerHTML = "<p>No shops found.</p>";
      return;
    }

    snapshot.forEach((doc) => {
      const d = doc.data();
      shopListDiv.innerHTML += `
        <div class="shop-card">
          <b>Shop Name:</b> ${d.name} <br>
          <b>Category:</b> ${d.category} <br>
          <b>Floor:</b> ${d.floor} <br>
          <b>Location:</b> ${d.location || "Not specified"}
        </div>
      `;
    });
  } catch (err) {
    console.error("Error loading shops:", err);
    shopListDiv.innerHTML = "<p>Error loading shops. Please try again.</p>";
  }
}

loadShops();
