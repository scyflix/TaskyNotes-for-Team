export async function loadComponent(path, containerId) {
   const container = document.getElementById(containerId)
   if(!container) return;

   const response = await fetch(path)
   const html = await response.text();

   container.innerHTML = html;
}