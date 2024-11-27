import React, { useState } from "react";
import SearchBar from "../../shared/SearchBar";
import Pagination from "../../shared/Pagination";
import { validateEmail } from "../../utils/validators";
import { mockUsers } from "../../utils/mockData";
import UserModal from "./UserModal";

const UserTable = () => {
  const [users, setUsers] = useState(mockUsers);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState("");

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveUser = (newUser) => {
    if (!validateEmail(newUser.email)) {
      alert("Invalid email address");
      return;
    }
    if (currentUser) {
      setUsers(
        users.map((user) => (user.id === newUser.id ? newUser : user))
      );
    } else {
      setUsers([...users, newUser]);
    }
    setModalOpen(false);
    setCurrentUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <SearchBar placeholder="Search users..." onSearch={setSearch} />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.role}</td>
                <td
                  className={`px-4 py-3 ${
                    user.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {user.status}
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-3"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <Pagination totalItems={filteredUsers.length} itemsPerPage={10} />
      </div>
      {isModalOpen && (
        <UserModal
          user={currentUser}
          closeModal={() => setModalOpen(false)}
          saveUser={handleSaveUser}
        />
      )}
    </div>
  );
};

export default UserTable;
