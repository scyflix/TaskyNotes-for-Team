import { loadComponent } from "../ui.js";

function lockScroll() {
  const main = document.querySelector(".mainContent");
  if (main) main.classList.add("lockScroll");
}

export function openCreateTaskModal() {
  const btn = document.getElementById("createTaskOpen");

  if (btn) {
    btn.addEventListener("click", async () => {
      lockScroll();

      await loadComponent(
        "../components/modals/create-task.html",
        "modalContainer",
      );
    });
  }
}

export function openLogTaskModal() {
  const btn = document.getElementById("logTaskOpen");

  if (btn) {
    btn.addEventListener("click", async () => {
      lockScroll();

      await loadComponent(
        "../components/modals/log-entry.html",
        "modalContainer",
      );
    });
  }
}

export function openCreateWorkspaceModal() {
  const btn = document.getElementById("createWorkspaceOpen");
  if (btn) {
    btn.addEventListener("click", async () => {
      lockScroll();

      await loadComponent(
        "../components/modals/create-workspace.html",
        "modalContainer",
      );
    });
  }
}
