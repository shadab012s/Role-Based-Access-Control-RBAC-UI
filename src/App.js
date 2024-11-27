import React, { useState } from 'react';
import UserTable from './components/UserManagement/UserTable';
import RoleTable from './components/RoleManagement/RoleTable';

const App = () => {
  const [currentView, setCurrentView] = useState("users");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">RBAC Dashboard</h1>
        <nav className="mt-2">
        <button
  onClick={() => setCurrentView("users")}
  className={`mr-4 p-2 ${currentView === "users" ? "bg-white text-black" : "bg-white text-black"} rounded border hover:bg-gray-100 hover:shadow-md`}
>
  User Management
</button>





<button
  onClick={() => setCurrentView("roles")}
  className={`mr-4 p-2 ${currentView === "roles" ? "bg-white text-black" : "bg-white text-black"} rounded border hover:bg-gray-100 hover:shadow-md`}
>
  Role Management
</button>

        </nav>
      </header>
      <main className="p-4">
        {currentView === "users" && <UserTable />}
        {currentView === "roles" && <RoleTable />}
      </main>
    </div>
  );
};

export default App;
