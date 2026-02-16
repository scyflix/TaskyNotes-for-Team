
const sections = {
  myTasks: `
    <section class="section">
      <h2 class="sectionTitle">My Tasks</h2>
      <div class="taskList">
        <div class="taskCard">
          <h3 class="taskTitle">Design Landing Page</h3>
          <p class="taskMeta meta">Due: Feb 14 • Priority: High</p>
          <button class="btn btn-primary btn-sm" id="markDone">View Details</button>
                <button type="button" class="btn btn-sm" id="logProgress">Log Progress</button>
        </div>
        <div class="taskCard">
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
      <div class="taskGrid">
        <div class="taskCard">
          <h3 class="taskTitle">Fix Navbar Bug</h3>
          <p class="taskMeta meta">Assigned to: Sarah</p>
        </div>
        <div class="taskCard">
          <h3 class="taskTitle">Prepare Presentation</h3>
          <p class="taskMeta meta">Assigned to: Abdulroqib</p>
        </div>
          <div class="taskCard">
          <h3 class="taskTitle">Update Database Schema</h3>
          <p class="taskMeta meta">Unassigned</p>
                          <button type="button" class="btn btn-sm" id="takeTask">Take Task</button>

        </div>
          <div class="taskCard">
          <h3 class="taskTitle">Update Database Schema</h3>
          <p class="taskMeta meta">Unassigned</p>
                          <button type="button" class="btn btn-sm" id="takeTask">Take Task</button>

        </div>
        <div class="taskCard">
          <h3 class="taskTitle">Prepare Presentation</h3>
          <p class="taskMeta meta">Assigned to: Abdulroqib</p>
        </div>
        <div class="taskCard">
          <h3 class="taskTitle">Prepare Presentation</h3>
          <p class="taskMeta meta">Assigned to: Abdulroqib</p>
        </div>
        <div class="taskCard">
          <h3 class="taskTitle">Update Database Schema</h3>
          <p class="taskMeta meta">Unassigned</p>
                          <button type="button" class="btn btn-sm" class="takeTask">Take Task</button>

        </div>
      </div>
    </section>
  `,

  members: `
    <section class="section">
      <h2 class="sectionTitle">Members</h2>
      <div class="memberList">
        <div class="memberCard">
          <h3 class="memberName">Abdulroqib</h3>
          <p class="memberRole">Admin</p>
        </div>
        <div class="memberCard">
          <h3 class="memberName">Sarah</h3>
          <p class="memberRole">Member</p>
        </div>
        <div class="memberCard">
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
        <div class="activityItem">
        <p><strong>Sarah</strong> completed <em>Fix Navbar Bug</em></p>
        <span class="activityTime">2 hours ago</span>

       <div class="activityItemActions">
        <button class="adminOnly markCompleted btn-sm btn btn-primary">Mark as complete</button>
        <button class="adminOnly taskDetails btn-sm btn">View Details</button>
        <button class="adminOnly commentOpener btn-sm btn">Comment</button>
        </div>
        </div>
        <div class="activityItem">
          <p><strong>Abdulroqib</strong> created <em>Design Landing Page</em></p>
          <span class="activityTime">5 hours ago</span>

             <div class="activityItemActions">
        <button class="adminOnly markCompleted btn-sm btn btn-primary">Mark as complete</button>
        <button class="adminOnly taskDetails btn-sm btn">View Details</button>
        <button class="adminOnly commentOpener btn-sm btn">Comment</button>
        </div>
        </div>
        <div class="activityItem">
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
  const content = document.getElementById("workspaceDashboardContent");
  if(content) {

    content.innerHTML = sections[section] || "<p>Section not found.</p>";
  }
}

export function initWorkspacePage() {
  loadSection("myTasks");

}

