# Role-Based Access Control (RBAC) UI

## Overview

This project provides a **Role-Based Access Control (RBAC)** user interface for managing users, their roles, and access permissions. It allows administrators to efficiently manage user accounts, assign roles, and modify user statuses (active/inactive) within the system. The RBAC UI is designed with a clean and intuitive interface to facilitate seamless user management.

## Features

- **User Management**: Ability to add, edit, and delete users.
- **Role Management**: Assign and manage roles (Admin, Editor, Viewer) for users.
- **User Status Management**: Toggle user status between active and inactive.
- **Search & Filter**: Search and filter users by name for quick access.
- **Pagination**: Manage large lists of users with pagination.
- **Responsive Design**: Mobile-first design that adapts seamlessly to various screen sizes.
- **Input Validation**: Ensures that user data, especially email addresses, are validated before submission.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Validation**: Custom validation functions for user inputs
- **UI Components**: Modal, Table, SearchBar, Pagination

## Installation

To run the project locally, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/shadab012s/Role-Based-Access-Control-RBAC-UI.git


cd Role-Based-Access-Control-RBAC-UI
npm install
npm start
