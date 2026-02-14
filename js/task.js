import { loadComponent } from "./ui.js";

export function openCreateTaskModal() {
  const createTaskOpen = document.getElementById("createTaskOpen");

  if (createTaskOpen) {
    createTaskOpen.addEventListener("click", async () => {
      await loadComponent(
        "/components/modals/create-task.html",
        "modalContainer"
      );
    });
  }
}

export function openLogTaskModal() {
  const logTaskOpen = document.getElementById("logTaskOpen");
  if (logTaskOpen) {
    logTaskOpen.addEventListener("click", async () => {
      await loadComponent(
        "/components/modals/log-entry.html",
        "modalContainer"
      );
    });
  }
}

export function openCreateWorkspaceModal() {
  const createWorkspaceOpen = document.getElementById("createWorkspaceOpen");
  if(createWorkspaceOpen) {
    createWorkspaceOpen.addEventListener("click", async () => {
      await loadComponent(
        "/components/modals/create-workspace.html", "modalContainer"
      )
    })
  }
}