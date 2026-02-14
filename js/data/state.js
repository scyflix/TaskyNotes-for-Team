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
    },
    {
      id: "ws_002",
      name: "Marketing Team",
      admin_id: "member_001",
      created_at: "22/02/2026",
      role: "memeber",
      status: "closed",
    },
    {
      id: "ws_003",
      name: "Gaming Team",
      admin_id: "admin_002",
      created_at: "3/05/2026",
      role: "admin",
      status: "active",
    },
  ],
  tasks: [
    {
      id: "task_001",
      workspace_id: "ws_001",
      title: "Design Dashboard UI",
      description: "Design Dashboard UI and add all navigation link and popup modals.",
      assigned_to: "user_001",
      status: "in-progress",
      dueDate: "2025-02-20",
    },
  ],
};