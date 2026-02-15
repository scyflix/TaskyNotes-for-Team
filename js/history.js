import { state } from "./data/state.js";

export function renderHistory() {
 const historyContainer = document.querySelector("#historyContainer");

 historyContainer.innerHTML = state.workspaces
   .filter((ws) => ws.status === "closed")
   .map(
     (ws) =>
       `<div class="card ${ws.status}"><h3>${ws.name} <span class="tag"> ${ws.status}</span></h3>
     <span class="meta">Closed on: ${ws.closed_at}</span></div>`,
   )
   .join("");
}
renderHistory()