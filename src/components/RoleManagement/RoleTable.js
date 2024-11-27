import React, { useState } from 'react';
import { RoleModal } from './RoleModal';

const RoleTable = () => {
  const [roles, setRoles] = useState([]);
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleAddRole = (newRole) => {
    setRoles([...roles, newRole]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>
      <table className="min-w-full bg-white shadow-md rounded mb-4">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="py-2 px-4">Role Name</th>
            <th className="py-2 px-4">Permissions</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b">
              <td className="py-2 px-4">{role.name}</td>
              <td className="py-2 px-4">{role.permissions.join(', ')}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setCurrentRole(role) || setRoleModalOpen(true)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setRoles(roles.filter((r) => r.id !== role.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setRoleModalOpen(true)}
      >
        Add Role
      </button>

      {isRoleModalOpen && (
        <RoleModal
          role={currentRole}
          closeModal={() => setRoleModalOpen(false)}
          saveRole={handleAddRole}
        />
      )}
    </div>
  );
};

export default RoleTable;
