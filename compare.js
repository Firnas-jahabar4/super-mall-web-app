import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const list = document.getElementById("product-list");

async function loadProducts() {
  const ref = collection(db, "products");
  const snapshot = await getDocs(ref);

  if (snapshot.empty) {
    list.innerHTML = "<p>No products found.</p>";
    return;
  }

  snapshot.forEach((doc) => {
    const d = doc.data();
    list.innerHTML += `
      <div class="product">
        <b>Product:</b> ${d.name} <br>
        <b>Price:</b> ₹${d.price} <br>
        <b>Features:</b> ${d.features}
      </div>
    `;
  });
}
loadProducts();
