export function sidebarToggle() {
  const sidebar = document.getElementById("sidebarContainer");
  sidebar.classList.toggle("show");
}
export function attachSidebarToggle() {
  const toggleBtn = document.getElementById("toggleSidebar");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", sidebarToggle);
}

