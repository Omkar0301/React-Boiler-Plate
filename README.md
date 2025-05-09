# React Boilerplate Template

This is a React boilerplate template designed with modern tools and best practices to provide a solid foundation for developing scalable React applications. It is built with **React 19** and includes configurations for state management, side effects, API handling, routing, theme management, and various utilities to ensure a smooth development experience.

## Features

This template includes the following features:

- **Vite** as the build tool and bundler for fast and optimized builds.
- **Redux** (with Redux Toolkit) for efficient and predictable state management.
- **Redux Saga** for handling middleware and side effects such as API calls, including generic API calling logic with Redux.
- **Redux Persist** to persist Redux state across sessions.
- **Redux Persist Encryption** to securely encrypt persisted Redux state in localStorage using AES encryption.
- **API Calling Logic** integrated through Redux with actions for success and failure handling.
- **Precommit Hooks** with **Husky** to enforce code quality checks (ESLint, Prettier) before commits.
- **ESLint** for linting the code and maintaining a consistent code style.
- **Prettier** for automatic code formatting to ensure a clean and consistent codebase.
- **Error Boundaries** to gracefully handle React errors in production.
- **React Router** for seamless routing and navigation within the application.
- **Nested Routing with RBAC**: Supports nested routes with role-based access control to restrict or allow access to routes based on user roles (e.g., Admin, User).
- **Material-UI (MUI)** for building a responsive and modern user interface with pre-built components.
- **Lazy Loading** for efficient loading of React components and improved performance.
- **Skeleton Structure** to provide better UX while data is being loaded asynchronously.
- **Environment Configuration** for managing different environments (e.g., development, staging, production) using `.env` files.
- **Axios** for making HTTP requests in a clean and efficient manner.
- **Helmet** for managing the document head and improving SEO.
- **PropTypes** for runtime type-checking of props in React components.
- **Theme Handling** with Material-UI for managing dark and light themes globally.
- **Webpack and Babel** for bundling and transpiling JavaScript (handled by Vite automatically).
- **Other Utilities** for best practices, including React Hooks and other necessary helpers.

## Technologies Used

This boilerplate uses the following technologies:

- **React 19**: The latest version of React for building user interfaces.
- **Vite**: Fast, next-generation build tool.
- **Redux & Redux Toolkit**: For state management.
- **Redux Saga**: Middleware for handling side effects, including generic API calling logic.
- **Axios**: For making HTTP requests.
- **React Router**: For routing and navigation.
- **Material-UI (MUI)**: For building responsive, modern user interfaces with built-in theme support.
- **Helmet**: For managing the document head and SEO.
- **PropTypes**: For type-checking React props.
- **ESLint & Prettier**: For enforcing code style and formatting.
- **Husky**: For precommit hooks and ensuring code quality.

## Getting Started

To get started with this React boilerplate template, follow the instructions below:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (alternative package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-boilerplate.git
   cd react-boilerplate
