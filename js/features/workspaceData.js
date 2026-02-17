import { dataCount } from "../utils.js";
import { state } from "../data/state.js";

let workspaceNameEl;
let workspaceDescriptionEl;
let upperDashboardContainer;
let savedWorkspaceData = [];

export function initWorkspaces() {
   workspaceNameEl = document.getElementById("workspacename");
   workspaceDescriptionEl = document.getElementById("workspaceDescription");

  upperDashboardContainer = document.getElementById(
        "upperDashboardContainer",
      );

      savedWorkspaceData = state.workspaces

      updateworkspaceCount()
      checkIfEmpty()
      createWorkspaceCardElement()
      renderExistingWorkspaces()
}
function updateworkspaceCount() {
  const createdWorkspaces = state.workspaces.filter(
    (ws) => ws.role === "admin" && ws.status === "active",
  );
  const openedWorkspaces = state.workspaces.filter(
    (ws) => ws.status === "active",
  );
  const closedWorkspaces = state.workspaces.filter(
    (ws) => ws.status === "closed",
  );

  const createdWorkspacesCount = document.getElementById(
    "createdWorkspacesCount",
  );
  const closedWorkspacesCount = document.getElementById(
    "closedWorkspacesCount",
  );
  const activeWorkspaceCount = document.getElementById("activeWorkspaceCount");
  dataCount(activeWorkspaceCount, openedWorkspaces);
  dataCount(createdWorkspacesCount, createdWorkspaces);
  dataCount(closedWorkspacesCount, closedWorkspaces);
}


function createWorkspaceCardElement(ws) {

const workspaceCard = document.createElement("div")
workspaceCard.classList.add("workspaceCard card");
workspaceCard.dataset.id = ws.id
workspaceCard.innerHTML = `
<h3>
           ${ws.name} 
           <span class="tag ${ws.role}">
           ${ws.role}
           </span>
           </h3> 
           <p>
           <span class="meta">Created on: ${ws.created_at}</span>
           </p>
           <details>
           <summary>Description</summary>
           <p>${ws.description}</p>
           </details>
           <button class="btn btn-sm openWorkspaceBtn">Open Workspace</button> 
`;

return workspaceCard;
}

function renderExistingWorkspaces() {
   upperDashboardContainer.innerHTML = ""

      const header = document.createElement("h2");
   header.textContent = "Recent Workspaces";
      
const div = document.createElement("div");
div.classList.add("recentContainer");

savedWorkspaceData.forEach(wsData => {

   

   const wsCard = createWorkspaceCardElement(wsData);

   div.append(wsCard)

})
   upperDashboardContainer.prepend(header, div);
}