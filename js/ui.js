import {unlockScroll} from "./utils/modals.js"

export async function loadComponent(path, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const response = await fetch(path);
  const html = await response.text();

  container.innerHTML = html;
}

export function closeModal() {
  const modalContainer = document.getElementById("modalContainer");

  //Close modal button
  const closeModalBtn = document.querySelector(".closeModalBtn");
    closeModalBtn.addEventListener("click", () => {
      modalContainer.innerHTML = "";
    });

    unlockScroll()
  }
