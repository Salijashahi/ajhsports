# AJHSPORTS – Full Stack Sports Management Web App

AJHSPORTS is a modern full-stack web application designed for players, coaches, and sports organizations.  
Built using **React (Vite) + Tailwind CSS** on the frontend and **Node.js + Express + MySQL** on the backend, this platform provides user registration, authentication, dashboard insights, and future expansion for event bookings, club listings, and training management.

---

## 🚀 Tech Stack

### **Frontend**
- React (Vite)
- React Router
- Tailwind CSS
- Context API for state management
- Protected Routes with JWT

### **Backend**
- Node.js + Express.js
- MySQL (with mysql2)
- JWT Authentication
- bcrypt Password Hashing
- REST API Architecture

---

## 🔐 Features

### **Authentication**
- User Signup (with validation)
- Secure Login (email + password)
- Password hashing using bcrypt
- JWT token generation
- Dashboard access only when authenticated
- Logout functionality

### **Frontend UI**
- Fully responsive Tailwind UI
- Login & Signup forms
- Dashboard layout
- Navbar + Footer
- Page routing system
- Clean component architecture

### **Backend API**
- `/api/auth/signup` – Register new user
- `/api/auth/login` – Login and generate JWT token
- Input validation & error handling
- Clear folder structure:
