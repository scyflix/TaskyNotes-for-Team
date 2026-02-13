import { loadComponent } from "./ui.js";
import { attachSidebarEvents } from "./workspace.js";
import { attachSidebarToggle } from "./utils.js";
import { openCreatrTaskModal } from "./task.js"

window.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("/components/sidebar-admin.html", "sidebarContainer");

  attachSidebarToggle();
  attachSidebarEvents();
  openCreatrTaskModal();
});
