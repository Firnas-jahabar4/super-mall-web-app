import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const filterSelect = document.getElementById("filter-select");
const resultDiv = document.getElementById("result");

filterSelect.addEventListener("change", async () => {
  const value = filterSelect.value;
  resultDiv.innerHTML = "";

  const ref = collection(db, "shops");
  const snapshot = await getDocs(ref);

  snapshot.forEach((doc) => {
    const d = doc.data();
    if (d.category === value || d.floor === value) {
      resultDiv.innerHTML += `
        <div class="result-card">
          <b>Shop:</b> ${d.name} <br>
          <b>Category:</b> ${d.category} <br>
          <b>Floor:</b> ${d.floor}
        </div>
      `;
    }
  });

  if (resultDiv.innerHTML === "") {
    resultDiv.innerHTML = "<p>No match found.</p>";
  }
});
