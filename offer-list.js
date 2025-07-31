import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const offersContainer = document.getElementById("offers");

async function loadOffers() {
  try {
    const snapshot = await getDocs(collection(db, "offers"));
    if (snapshot.empty) {
      offersContainer.innerHTML = `<p>No offers found. Sample: 30% Off - Shop A</p>`;
      return;
    }
    snapshot.forEach((doc) => {
      const data = doc.data();
      offersContainer.innerHTML += `
        <div><strong>${data.title}</strong><br>Discount: ${data.discount}<br><hr></div>
      `;
    });
  } catch (error) {
    offersContainer.innerHTML =
      "🔥 Firebase error. Showing sample data:<br><strong>50% Off on Electronics</strong>";
  }
}

loadOffers();
