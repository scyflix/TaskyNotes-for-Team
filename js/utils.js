const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar")

export function sidebarToggle() {
   sidebar.classList.toggle("show");
}

 toggleSidebar.addEventListener("click", () => {
   sidebarToggle()
 });