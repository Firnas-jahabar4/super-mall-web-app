import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);
const form = document.getElementById("productForm");
const list = document.getElementById("productList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("productName").value;
  const price = document.getElementById("price").value;
  const features = document.getElementById("features").value;
  const shopId = document.getElementById("shopId").value;

  try {
    await addDoc(collection(db, "products"), {
      name,
      price,
      features,
      shopId,
    });
    alert("✅ Product added");
    form.reset();
    loadProducts();
  } catch (err) {
    alert("❌ " + err.message);
  }
});

async function loadProducts() {
  list.innerHTML = "";
  const snapshot = await getDocs(collection(db, "products"));
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const li = document.createElement("li");
    li.textContent = `${data.name} - ₹${data.price} - ${data.features}`;
    list.appendChild(li);
  });
}

loadProducts();
