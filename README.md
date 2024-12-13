﻿# airbnb-clone

<!-- - backend url : https://airbnb-clone-6h8m.onrender.com -->


# 🏠 Airbnb Clone Backend

A full-featured backend for an Airbnb-style booking platform.

This backend provides essential features like user authentication, property CRUD operations, image uploads, and booking system with double-booking prevention. The backend is built using Node.js, Express.js, and MongoDB.

 - Deploy on Render: https://airbnb-clone-6h8m.onrender.com

____________________________________________________



## 🚀 Features

 **🔐 User Authentication**: 
     Register, Login, and JWT-based authentication.

**🏠 Property Management**: 
     Create, view, update, and delete property listings.

**📸 Image Uploads**:
     Upload up to 5 images for each property using Multer.

**📅 Booking System**:
     Book properties and prevent double bookings for the same dates.

___________________________________________________


## 📋 API Endpoints

#### 🔐 Authentication Routes


| Method | Endpoint  | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/auth/register` |Register a new user|
| `POST` | `/api/auth/login` | Log in a user and return a JWT token|

#### 🏠 Property Routes

| Method | Endpoint  | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/properties/` |Create a new property (with image uploads).|
| `GET` | `/api/properties/` |Get all properties with filters like location, price, etc.|
| `GET` | `/api/properties/:id` |Get a property by ID|
| `PUT` | `/api/properties/:id` |Update a property (user must be the owner)|
| `DELETE` | `/api/properties/:id` |Delete a property (user must be the owner)|

#### 📅 Booking Routes

| Method | Endpoint  | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/bookings/` |Create a booking with date validation to prevent double bookings|
| `GET` | `/api/bookings/` |View all bookings|
| `DELETE` | `/api/bookings/:id` |	Delete a booking by ID|



