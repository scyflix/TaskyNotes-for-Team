import {state} from "./data/state.js"

//Get workspace url
const params = new URLSearchParams(window.location.search)
const workspaceId = params.get('ws')

//Load data
const workspace = state.workspaces.find(w => w.id === workspaceId)


export function initWorkspaceData() {
  if (!workspace) return
  
  const adminWorkspaceDashboardContent = document.getElementById(
    "adminWorkspaceDashboardContent",
  );
  const workspaceName = document.getElementById("workspaceName")
   

        if(workspace) {
          document.title = workspace.name;
        }

  if(workspace && workspaceName) {
    workspaceName.innerHTML = `${workspace.name} <span class="tag">Admin</span>`;
  }

if(adminWorkspaceDashboardContent) {
  adminWorkspaceDashboardContent.innerHTML = ""
}



console.log("TASKS:", workspace.workspace_tasks);
if (workspace && adminWorkspaceDashboardContent) {
  loadCreatedTasks(
    workspace.workspace_tasks || [],
    adminWorkspaceDashboardContent,
  );
}

loadMembers()
loadActivities()
}


function loadCreatedTasks(tasks, container) {
  const section = document.createElement("section")
  section.classList.add("section")
  
  const sectionTitle = document.createElement("h2")
  sectionTitle.classList.add("sectionTitle")
  sectionTitle.textContent = "Created Tasks"

  const divGrid = document.createElement("div");
  divGrid.classList.add("grid")

  console.log("shown")
tasks.forEach(tsk => {

const taskCard = document.createElement("div")
taskCard.classList.add("card", "taskCard")

const taskTitle = document.createElement("h3")
taskTitle.classList.add("taskTitle")
taskTitle.textContent = tsk.title

const taskMeta = document.createElement("p")
taskMeta.classList.add("taskMeta", "meta")
taskMeta.textContent = `Assigned to: ${tsk.assigned_to}`

const assignToMemberBtn = document.createElement("button")
assignToMemberBtn.classList.add("btn", "btn-primary", "btn-sm", "assignToMemberBtn")
assignToMemberBtn.textContent = "Assign to Member"

taskCard.append(taskTitle, taskMeta, assignToMemberBtn)

divGrid.append(taskCard)
})


section.append(sectionTitle, divGrid)
container.append(section)
}

function loadMembers() {

}

function loadActivities() {

}



const sections = {
  myTasks: `
    <section class="section">
      <h2 class="sectionTitle">My Tasks</h2>
      <div class="taskList">
        <div class="card taskCard">
          <h3 class="taskTitle">Design Landing Page</h3>
          <p class="taskMeta meta">Due: Feb 14 • Priority: High</p>
          <button class="btn btn-primary btn-sm" id="markDone">View Details</button>
                <button type="button" class="btn btn-sm" id="logProgress">Log Progress</button>
        </div>
        <div class="card taskCard">
          <h3 class="taskTitle">Write Email Copy</h3>
          <p class="taskMeta meta">Due: Feb 16 • Priority: Medium</p>
          <button class="btn btn-primary btn-sm">View Details</button>
                          <button type="button" class="btn btn-sm" id="logProgress">Log Progress</button>

        </div>
      </div>
    </section>
  `,

  allTasks: `
    <section class="section">
      <h2 class="sectionTitle">All Tasks</h2>
      <div class="grid">
        <div class="card taskCard">
          <h3 class="taskTitle">Fix Navbar Bug</h3>
          <p class="taskMeta meta">Assigned to: Sarah</p>
        </div>
        <div class="card taskCard">
          <h3 class="taskTitle">Prepare Presentation</h3>
          <p class="taskMeta meta">Assigned to: Abdulroqib</p>
        </div>
          <div class="card taskCard">
          <h3 class="taskTitle">Update Database Schema</h3>
          <p class="taskMeta meta">Unassigned</p>
                          <button type="button" class="btn btn-sm" id="takeTask">Take Task</button>

        </div>
          <div class="card taskCard">
          <h3 class="taskTitle">Update Database Schema</h3>
          <p class="taskMeta meta">Unassigned</p>
                          <button type="button" class="btn btn-sm" id="takeTask">Take Task</button>

        </div>
        <div class="card taskCard">
          <h3 class="taskTitle">Prepare Presentation</h3>
          <p class="taskMeta meta">Assigned to: Abdulroqib</p>
        </div>
        <div class="card taskCard">
          <h3 class="taskTitle">Prepare Presentation</h3>
          <p class="taskMeta meta">Assigned to: Abdulroqib</p>
        </div>
        <div class="card taskCard">
          <h3 class="taskTitle">Update Database Schema</h3>
          <p class="taskMeta meta">Unassigned</p>
                          <button type="button" class="btn btn-sm" class="takeTask">Take Task</button>

        </div>
      </div>
    </section>
  `,

  members: `
    <section class="section">
      <h2 class="sectionTitle">Workspace Members</h2>
      <div class="memberList grid">
        <div class="memberCard card">
          <h3 class="memberName">Abdulroqib</h3>
          <p class="memberRole">Admin</p>
        </div>
        <div class="memberCard card">
          <h3 class="memberName">Sarah</h3>
          <p class="memberRole">Member</p>
        </div>
        <div class="memberCard card">
          <h3 class="memberName">David</h3>
          <p class="memberRole">Member</p>
        </div>
      </div>
    </section>
  `,

  activity: `
    <section class="section">
      <h2 class="sectionTitle">Activity Log</h2>
      <div class="activityList">
        <div class="activityItem card">
        <p><strong>Sarah</strong> completed <em>Fix Navbar Bug</em></p>
        <span class="activityTime">2 hours ago</span>

       <div class="activityItemActions">
        <button class="adminOnly markCompleted btn-sm btn btn-primary">Mark as complete</button>
        <button class="adminOnly taskDetails btn-sm btn">View Details</button>
        <button class="adminOnly commentOpener btn-sm btn">Comment</button>
        </div>
        </div>
        <div class="activityItem card">
          <p><strong>Abdulroqib</strong> created <em>Design Landing Page</em></p>
          <span class="activityTime">5 hours ago</span>

             <div class="activityItemActions">
        <button class="adminOnly markCompleted btn-sm btn btn-primary">Mark as complete</button>
        <button class="adminOnly taskDetails btn-sm btn">View Details</button>
        <button class="adminOnly commentOpener btn-sm btn">Comment</button>
        </div>
        </div>
        <div class="activityItem card">
          <p><strong>David</strong> joined the workspace</p>
          <span class="activityTime">1 day ago</span>

            <div class="activityItemActions">
                    <button class="adminOnly markCompleted btn-sm btn btn-primary">Mark as complete</button>
        <button class="adminOnly taskDetails btn-sm btn">View Details</button>
        <button class="adminOnly commentOpener btn-sm btn">Comment</button>
        </div>
        </div>
      </div>
    </section>
  `,
};



export function loadSection(section) {
const adminWorkspaceDashboardContent = document.getElementById(
  "adminWorkspaceDashboardContent",
);
  if(adminWorkspaceDashboardContent) {
    adminWorkspaceDashboardContent.innerHTML =
      sections[section] || "<p>Section not found.</p>";
  }
}

document.addEventListener("click", (e) => {
  if(!e.target.classList.contains("navBtn")) return

  const section = e.target.dataset.section
  loadSection(section)
})
