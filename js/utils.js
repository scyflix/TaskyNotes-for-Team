export function sidebarToggle() {
  const sidebar = document.querySelector(".sidebarContainer");
  sidebar.classList.toggle("show");
}
export function attachSidebarToggle() {
  const toggleBtn = document.getElementById("toggleSidebar");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", sidebarToggle);
}


//PERSONAL LOG TOGGLE
const personalLogInputContainer = document.querySelector(
  ".personalLogInputContainer",
);


export function personalLogInputContainerPanelToggle() {
  const toggleInputContainer = document.getElementById("toggleInputContainer");
  toggleInputContainer.addEventListener("click", () => {
    toggleInputContainer.textContent =
    toggleInputContainer.textContent === "Close Input Panel"
    ? "Open Input Panel"
    : "Close Input Panel";
    personalLogInputContainer.classList.toggle("expand");
    toggleInputContainer.classList.toggle("panelClosed");
  });
}

//Textarea autoexpand
const textarea = document.querySelector("#note");
textarea.addEventListener("input", () => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
});
