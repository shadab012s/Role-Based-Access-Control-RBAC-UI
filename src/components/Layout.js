import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="flex">
    <nav className="w-1/5 h-screen bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">RBAC Dashboard</h1>
      <ul className="mt-6 space-y-4">
        <li><Link to="/">User Management</Link></li>
        <li><Link to="/roles">Role Management</Link></li>
        <li><Link to="/permissions">Permission Management</Link></li>
      </ul>
    </nav>
    <main className="w-4/5 p-6">{children}</main>
  </div>
);

export default Layout;
