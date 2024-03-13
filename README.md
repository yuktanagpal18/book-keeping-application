# Book-Keeping-App

## Description
The Book-Keeping-App is a web application designed for managing books, allowing users to perform CRUD operations on their book collection. It provides functionalities for creating, reading, updating, and deleting books. Users can also manage their profiles, including updating their information.

## Features
- **CRUD Operations:** Users can perform CRUD operations on their book collection.
- **Database Modelling:** MongoDB with Mongoose is used for database management.
- **Database Association:** Books are associated with users through the `createdBy` field in the database schema.
- **User Profile:** Users have profiles where they can view and manage their personal information.
- **Authentication (Login/Logout):** User authentication is implemented using JWT and bcryptjs for secure login and logout.

## Technologies
- Node.js/Express
- React/Redux
- MongoDB/Mongoose
- Authentication with JWT and bcryptjs

## Usage
- Sign up for a new account or log in with existing credentials.
- Add, view, update, or delete books from your collection.
- Update your profile information as needed.
- Log out to securely end your session.
