// contexts/RBACContext.js
import React, { createContext, useState } from 'react';

export const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  return (
    <RBACContext.Provider value={{ users, setUsers, roles, setRoles }}>
      {children}
    </RBACContext.Provider>
  );
};
