import {
  personalLogInputContainerPanelToggle
} from "./utils.js";

const taskEl = document.getElementById("task");
const timeEl = document.getElementById("taskTime");
const noteEl = document.getElementById("note");

const personalCreatedLogs = document.getElementById("personalCreatedLogs");
const logTaskBtn = document.getElementById("logTask");

function formatDateTime(isoString) {
   const date = new Date(isoString);
   
   return date.toLocaleString("en-US", {
    month: "long", // February
    day: "numeric", // 11
    year: "numeric", // 2026
    hour: "2-digit", // 12
    minute: "2-digit", // 27
   });
}

function checkIfEmpty() {
  if (savedLogDetails.length === 0) {
    personalCreatedLogs.innerHTML = `<p class="placeholderText">No task logged yet. Add one using the form next to this panel.</p>`;
  } else {
   const placeholder = personalCreatedLogs.querySelector(".placeholderText")
   if(placeholder) placeholder.remove()
  }
}

function createLogElement(log) {   
   let savedLogDetails = JSON.parse(localStorage.getItem("logDetails")) || [];

   let changed = false;

   savedLogDetails = savedLogDetails.map((log) => {
     if (!log.id) {
       changed = true;
       return { ...log, id: crypto.randomUUID() };
     }
     return log;
   });

   if (changed) {
     localStorage.setItem("logDetails", JSON.stringify(savedLogDetails));
   }

 const taskDetails = document.createElement("details");
 taskDetails.classList.add("taskContainer");
 taskDetails.dataset.id = log.id;

 const taskSummary = document.createElement("summary");
 taskSummary.title = "click to see details";
 taskSummary.innerHTML = `${log.taskValue} <button data-title="delete Task" type="button" class="deleteBtn tooltip"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3 6 5 6 21 6" />
  <path d="M19 6l-1 14H6L5 6" />
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M9 6V4h6v2" />
</svg>
</button>`;

 const taskTime = document.createElement("span");
 taskTime.textContent = formatDateTime(log.timeValue);

 const taskNote = document.createElement("p");
 taskNote.textContent = log.noteValue;
 taskDetails.append(taskSummary, taskTime, taskNote);

 return taskDetails
}
const savedLogDetails = JSON.parse(localStorage.getItem("logDetails")) || [];

savedLogDetails.forEach((log) => {
   
   const el = createLogElement(log);
  personalCreatedLogs.append(el);

  requestAnimationFrame(() => {
     el.classList.add("show");
   });
});
checkIfEmpty();

//When log task button is clicked to create new log
logTaskBtn.addEventListener("click", () => {
  const taskValue = taskEl.value.trim();
  const timeValue = timeEl.value.trim();
  const noteValue = noteEl.value.trim();
  
  if (!taskValue || !timeValue || !noteValue) {
    alert("Input field must not be empty");
    return;
  }

     personalLogInputContainerPanelToggle();

  const logData = {
   id: crypto.randomUUID(),
    taskValue,
    timeValue,
    noteValue,
   };

  savedLogDetails.unshift(logData);
  localStorage.setItem("logDetails", JSON.stringify(savedLogDetails));
  
  const el = createLogElement(logData)
  personalCreatedLogs.prepend(el)
checkIfEmpty();

  requestAnimationFrame(() => {
   el.classList.add("show")
  })
   
  taskEl.value = "";
  timeEl.value = "";
  noteEl.value = "";
});

//For Delete Button
personalCreatedLogs.addEventListener("click", (e) => {
   const btn = e.target.closest(".deleteBtn")
   if(!btn) return

   e.preventDefault()
   e.stopPropagation()


   if(!confirm("Delete this task log?")) return

   const logToDelete = btn.closest(".taskContainer")
         const id = logToDelete.dataset.id;

               const index = savedLogDetails.findIndex((log) => log.id === id);
               if (index === -1) return;

                     savedLogDetails.splice(index, 1);
                     localStorage.setItem(
                       "logDetails",
                       JSON.stringify(savedLogDetails),
                     );

                     // Add animation class
      logToDelete.classList.add("removing");

      // Remove after animation ends
      setTimeout(() => {
        logToDelete.remove();
        //check if task log conatiner is empty
            checkIfEmpty();
      }, 250); // matches CSS transition time

})