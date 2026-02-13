import { loadComponent } from "./ui.js";

export function openCreatrTaskModal() {
   const createTaskBtn = document.getElementById("createTask");
   if(createTaskBtn) {
      createTaskBtn.addEventListener("click", async () => {
         await loadComponent("/components/modal.html", "modalContainer");
      })
   }
}