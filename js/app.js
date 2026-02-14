import { loadComponent } from "./ui.js";
import { attachSidebarEvents } from "./workspace.js";
import { attachSidebarToggle } from "./utils.js";
import { openCreateTaskModal, openLogTaskModal, openCreateWorkspaceModal } from "./task.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("/components/sidebar-admin.html", "adminSidebarContainer");
  await loadComponent(
    "/components/sidebar-member.html",
    "memberSidebarContainer",
  );
   await loadComponent(
    "/components/sidebar-dashboard.html",
    "dashboardSidebarContainer",
  );

  attachSidebarToggle();
  attachSidebarEvents();
  openCreateTaskModal();
  openLogTaskModal();
  openCreateWorkspaceModal()
});
