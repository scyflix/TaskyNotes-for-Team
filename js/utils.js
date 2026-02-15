export function sidebarToggle() {
  const sidebar = document.querySelector(".sidebarContainer");
  sidebar.classList.toggle("show");
}
export function attachSidebarToggle() {
  const toggleBtn = document.getElementById("toggleSidebar");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", sidebarToggle);

  document.querySelector(".actionBtn").addEventListener("click", sidebarToggle)
}

//PERSONAL LOG TOGGLE
const personalLogInputContainer = document.querySelector(
  ".personalLogInputContainer",
);

export function dataCount(displayer, dataToCount) {
  displayer.textContent = dataToCount.length;
}

export function personalLogInputContainerPanelToggle() {
  const toggleInputContainer = document.getElementById("toggleInputContainer");
  const upperDashboardContainer = document.getElementById(
    "upperDashboardContainer",
  );

  if(toggleInputContainer) {
    toggleInputContainer.addEventListener("click", () => {
      upperDashboardContainer.classList.toggle("hide")

      toggleInputContainer.textContent =
      toggleInputContainer.textContent === "Close Input Panel"
      ? "Open Input Panel"
      : "Close Input Panel";
      personalLogInputContainer.classList.toggle("expand");
      toggleInputContainer.classList.toggle("panelClosed");
    });
  }
}

//Textarea autoexpand
const textarea = document.querySelector("#note");
if(textarea) {

  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });
}
