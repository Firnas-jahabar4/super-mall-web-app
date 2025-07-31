import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);

const categoryForm = document.getElementById("categoryForm");
const floorForm = document.getElementById("floorForm");
const categoryList = document.getElementById("categoryList");
const floorList = document.getElementById("floorList");

categoryForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const category = document.getElementById("categoryInput").value;

  try {
    await addDoc(collection(db, "categories"), { category });
    alert("✅ Category added");
    categoryForm.reset();
    loadCategories();
  } catch (err) {
    alert("❌ " + err.message);
  }
});

floorForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const floor = document.getElementById("floorInput").value;

  try {
    await addDoc(collection(db, "floors"), { floor });
    alert("✅ Floor added");
    floorForm.reset();
    loadFloors();
  } catch (err) {
    alert("❌ " + err.message);
  }
});

async function loadCategories() {
  categoryList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "categories"));
  snapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.textContent = docSnap.data().category;
    categoryList.appendChild(li);
  });
}

async function loadFloors() {
  floorList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "floors"));
  snapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.textContent = docSnap.data().floor;
    floorList.appendChild(li);
  });
}

loadCategories();
loadFloors();
