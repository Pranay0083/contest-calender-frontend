import { useState } from "react";
import { DeleteModal } from "./DeleteModal";
import { Trash2 } from 'lucide-react';

export default function UserTables({ users, onDeleteUser }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    if (selectedUser) {
      onDeleteUser(selectedUser);
      setShowDeleteModal(false);
      setSelectedUser(null);
    }
  };

  const openDeleteModal = (userId) => {
    setSelectedUser(userId);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th style={{ width: "80px" }}>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={`status-badge ${
                      user.status === "active" ? "active" : "inactive"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => openDeleteModal(user.id)}
                  >
                    <span> <Trash2 size={14}/></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
