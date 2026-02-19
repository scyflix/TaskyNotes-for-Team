import { loadComponent, closeModal } from "../ui.js";
import {initWorkspaces} from "../features/workspaceData.js"

function attachCloseModal() {
  //Close modal button
  const closeModalBtn = document.querySelector(".closeModalBtn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      closeModal();
    });
  }
}

function lockScroll() {
  const main = document.querySelector(".mainContent");
  if (main) main.classList.add("lockScroll");
}

 export function unlockScroll() {
    const main = document.querySelector(".mainContent");
    if (main) main.classList.remove("lockScroll");
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

      //Close modal 
      attachCloseModal()
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

      //Close modal
      attachCloseModal()
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
        "modalContainer"
      );

      initWorkspaces();

      //Close modal
      attachCloseModal()
    
    });
  }
}



function attachOpenSignupModal() {
  const openSignupModalBtn = document.getElementById("openSignupModal")
  if(openSignupModalBtn) {
    openSignupModalBtn.addEventListener("click", async () => {
        loadComponent("../components/modals/signup.html", "modalContainer");
      });

      attachCloseModal()
  }
}


export function openLoginModal() {
  const openLoginModalBtn = document.getElementById("openLoginModal")
  if(openLoginModalBtn) {
    openLoginModalBtn.addEventListener("click", async () => {

      await loadComponent("../components/modals/login.html", "modalContainer"); 

      attachOpenSignupModal()
      attachCloseModal()
    })
  }
  
}
