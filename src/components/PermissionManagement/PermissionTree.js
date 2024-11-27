// src/components/PermissionManagement/PermissionTree.js
import React, { useState } from 'react';

const PermissionTree = ({ permissions, onPermissionChange }) => {
  const handleCheckboxChange = (permissionId, parentPermissionId) => {
    onPermissionChange(permissionId, parentPermissionId);  // Toggle permission state
  };

  const renderPermissions = (permissions, parentPermissionId = null) => {
    return permissions
      .filter((permission) => permission.parentId === parentPermissionId)
      .map((permission) => (
        <div key={permission.id} style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={permission.selected}
            onChange={() =>
              handleCheckboxChange(permission.id, permission.parentId)
            }
          />
          <label>{permission.name}</label>
          {renderPermissions(permissions, permission.id)}  {/* Recursively render child permissions */}
        </div>
      ));
  };

  return (
    <div>
      <h3>Assign Permissions</h3>
      {renderPermissions(permissions)}
    </div>
  );
};

export default PermissionTree;
