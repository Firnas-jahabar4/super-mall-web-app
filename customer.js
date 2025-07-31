// js/customer.js
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const page = window.location.pathname.split("/").pop();
const container = document.querySelector(".centered-container");

if (page === "shop-list.html") {
  const ref = collection(db, "shops");
  getDocs(ref).then((snapshot) => {
    snapshot.forEach((doc) => {
      const d = doc.data();
      container.innerHTML += `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <b>Shop:</b> ${d.name}<br/>
          <b>Floor:</b> ${d.floor}<br/>
          <b>Category:</b> ${d.category}
        </div>
      `;
    });
  });
}
