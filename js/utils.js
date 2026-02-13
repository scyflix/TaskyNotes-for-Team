export function sidebarToggle() {
  const sidebar = document.querySelector(".sidebarContainer");
  sidebar.classList.toggle("show");
}
export function attachSidebarToggle() {
  const toggleBtn = document.getElementById("toggleSidebar");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", sidebarToggle);
}

