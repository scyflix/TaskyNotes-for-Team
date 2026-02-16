export const state = {
  user: {
    id: "user_001",
    email: "abdulroqib@gmail.com",
    name: "Abdulroqib",
    created_at: "01/01/2026",
  },

  workspaces: [
    {
      id: "ws_001",
      name: "Design Team",
      admin_id: "admin_001",
      created_at: "02/02/2026",
      role: "admin",
      status: "active",
      description: "Design team for the LogHue project",
    },
    {
      id: "ws_002",
      name: "Marketing Team",
      admin_id: "member_001",
      created_at: "22/02/2026",
      role: "member",
      status: "active",
      description: "marketing team for the LogHue project",
    },
    {
      id: "ws_003",
      name: "Gaming Team",
      admin_id: "admin_002",
      created_at: "3/05/2026",
      closed_at: "21/05/2026",
      role: "admin",
      status: "closed",
    },
    {
      id: "ws_004",
      name: "Marketing team1",
      admin_id: "admin_003",
      created_at: "1/02/2026",
      closed_at: "30/04/2026",
      role: "admin",
      status: "closed",
    },
  ],
  tasks: [
    /*
    {
      id: "task_001",
      workspace_id: "ws_001",
      title: "Design Dashboard UI",
      description:
        "Design Dashboard UI and add all navigation link and popup modals.",
      assigned_to: "user_001",
      status: "in-progress",
      dueDate: "2025-02-20",
    },
    */

    {
      id: crypto.randomUUID(),
      taskValue: "Refactored sidebar component",
      timeValue: "2026-02-15T10:30",
      noteValue: "Cleaned up event listeners and improved toggle logic.",
    },
    {
      id: crypto.randomUUID(),
      taskValue: "Designed workspace cards",
      timeValue: "2026-02-14T16:45",
      noteValue: "Added role badges and improved spacing for readability.",
    },
    {
      id: crypto.randomUUID(),
      taskValue: "Integrated personal task logger",
      timeValue: "2026-02-13T09:10",
      noteValue: "Merged Solo UI into Team dashboard and synced state.",
    },
    {
      id: crypto.randomUUID(),
      taskValue: "Updated dashboard summary",
      timeValue: "2026-02-12T14:20",
      noteValue: "Added dynamic counts for workspaces and tasks.",
    },
    {
      id: crypto.randomUUID(),
      taskValue: "Improved placeholder logic",
      timeValue: "2026-02-11T18:05",
      noteValue:
        "Ensured empty-state message appears correctly after deletions.",
    },
  ],
};