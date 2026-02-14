import { state } from "./data/state.js";

export function renderDashboard() {
  const dashboardContainer = document.querySelector("#upperDashboardContainer");
  dashboardContainer.innerHTML = state.workspaces
    .filter((ws) => ws.status === "active")
    .map(
      (ws) =>
        ` <div class="workspaceCard card"> <h3>${ws.name} <span class="role ${ws.role}">${ws.role}</span></h3> <span class="meta">Created on: ${ws.created_at}</span></div> `,
    )
    .join("");
}