import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const floorDiv = document.getElementById("floor-details");
const floors = {};

async function groupByFloor() {
  const ref = collection(db, "shops");
  const snapshot = await getDocs(ref);

  snapshot.forEach((doc) => {
    const d = doc.data();
    const floor = d.floor || "Unknown";
    if (!floors[floor]) floors[floor] = [];
    floors[floor].push(d.name);
  });

  for (const f in floors) {
    floorDiv.innerHTML += `
      <div class="floor-section">
        <b>${f}</b><br>
        ${floors[f].join(", ")}
      </div>
    `;
  }
}
groupByFloor();
