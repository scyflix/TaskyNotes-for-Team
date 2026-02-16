//Textarea autoexpand
export function autoExpandTextarea() {
  const textarea = document.querySelector("#note");
  if (textarea) {
    textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });
}
}
