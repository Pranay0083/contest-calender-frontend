import React from "react";
import { useState } from "react";
import UserTable from "./UserTables";
import './admin.css'

// const User = {
//   id: string,
//   name: string,
//   email: string,
//   role: string,
//   status: "active" | "inactive",
//   lastLogin: string,
// };

const initialUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2024-03-20 14:23",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "active",
    lastLogin: "2024-03-19 09:45",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "User",
    status: "inactive",
    lastLogin: "2024-03-15 16:30",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "Editor",
    status: "active",
    lastLogin: "2024-03-20 11:15",
  },
  {
    id: "5",
    name: "Alex Brown",
    email: "alex@example.com",
    role: "User",
    status: "active",
    lastLogin: "2024-03-18 13:50",
  },
];

function Admin() {
  const [users, setUsers] = useState(initialUsers);
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>

      <main className="main-content">
        <div className="page-title">
          <h1>Admin Dashboard</h1>
          <p>Manage user accounts and permissions</p>
        </div>

        <UserTable users={users} onDeleteUser={handleDeleteUser} />
      </main>
    </div>
  );
}

export default Admin;
