import React, { useState, useEffect } from 'react';

const generateUniqueId = () => 'role-' + Date.now();

export const RoleModal = ({ role, closeModal, saveRole }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (role) {
      setName(role.name);
      setPermissions(role.permissions || []);
    }
  }, [role]);

  const handleSave = () => {
    const newRole = {
      id: role ? role.id : generateUniqueId(),
      name,
      permissions,
    };
    saveRole(newRole);
    closeModal();
  };

  const handlePermissionChange = (e) => {
    const value = e.target.value;
    setPermissions(
      permissions.includes(value)
        ? permissions.filter((perm) => perm !== value)
        : [...permissions, value]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{role ? 'Edit Role' : 'Add Role'}</h2>
        <input
          type="text"
          className="input mb-4"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-4">
          <h3 className="font-semibold">Permissions</h3>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value="create"
              checked={permissions.includes('create')}
              onChange={handlePermissionChange}
              className="form-checkbox"
            />
            <span className="ml-2">Create</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value="edit"
              checked={permissions.includes('edit')}
              onChange={handlePermissionChange}
              className="form-checkbox"
            />
            <span className="ml-2">Edit</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value="delete"
              checked={permissions.includes('delete')}
              onChange={handlePermissionChange}
              className="form-checkbox"
            />
            <span className="ml-2">Delete</span>
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
