# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# MegaBlogs

MegaBlogs is a modern blogging platform built with React and Vite, featuring a clean and responsive user interface. This application allows users to create, edit, and manage blog posts seamlessly. It integrates with Appwrite for backend services, providing user authentication, file storage, and database management.

## Features

- **User  Authentication**: Users can sign up, log in, and manage their accounts.
- **Post Management**: Create, edit, and delete blog posts with rich text editing capabilities.
- **Responsive Design**: The application is fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Image Uploads**: Users can upload images to accompany their blog posts.
- **Real-time Updates**: The application supports hot module replacement (HMR) for a smooth development experience.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Appwrite
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form
- **Routing**: React Router DOM
- **Linting**: ESLint

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SayyedAquib/MegaBlogs
   ```

2. Navigate to the project directory:
   ```bash
   cd megablogs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a .env file in the root directory and add your Appwrite configuration:
   ```bash
   VITE_APPWRITE_URL=
   VITE_APPWRITE_PROJECT_ID=
   VITE_APPWRITE_DATABASE_ID=
   VITE_APPWRITE_COLLECTION_ID=
   VITE_APPWRITE_BUCKET_ID=
   VITE_APPWRITE_TINYMCE_APIKEY=
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

# Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/YourFeature).
- Make your changes and commit them (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/YourFeature).
- Open a Pull Request.
