
# Airbnb Clone Backend API

This API allows users to register, log in, create, view, update, and delete properties, and make bookings. The API supports authentication, image uploads, and role-based access control.  

 - Deploy on Render: https://airbnb-clone-6h8m.onrender.com

____________________________________________________




## Tech Stack

| **Technology**       | **Purpose**                             |
|---------------------|------------------------------------------|
| **Node.js**          | Core programming language               |
| **Express.js**       | Web framework for building REST APIs    |
| **MongoDB**          | Database to store users, properties, and bookings |
| **Mongoose**         | ODM (Object-Document Mapping) for database interaction |
| **JWT (JSON Web Token)** | For user authentication and authorization |
| **Multer**           | For uploading images                    |
| **bcrypt.js**        | For password hashing                    |
| **dotenv**           | Environment variable management         |


## Setup

1. Clone the Repository

```bash
  https://github.com/VaghaniAxita/airbnb-clone
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Management
  
  **Register User**

- Route: POST /api/auth/register
- Description: Registers a new user in the system.
- Request Body:
```bash
  {
  "name":"node",
  "email":"node@gmail.com",
  "password":"node"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "message": "User registered successfully"
  } 
```

**User Login**

- Route: POST /api/auth/login
- Description: Authenticates a user and returns an access token.
- Request Body:
```bash
  {
  "email":"node@gmail.com",
  "password":"node"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjI4YjQzNGQxMmE3NWYyZTYyYmI1YSIsImlhdCI6MTczNDUxMjc1MywiZXhwIjoxNzM0NTE2MzUzfQ.XF1u4RGyI2AbYX2ops8T1lWrj7Ric_0MGRlznsQZgpQ"
 }
```
**Get All Users**
- Route: GET /api/auth/
- Description: Retrieves information about all users. 
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
 [
  {
    "_id": "675ba7dd8e1ea8ff253f87f5",
    "name": "abc",
    "email": "abc@gmail.com",
    "password": "$2a$10$A3Uw3RvTewuXeJ7VLODaQuHQ7fb/VTpSUirduQh7hU7sLlgF2ScuG",
    "__v": 0
  },
  {
    "_id": "67628b434d12a75f2e62bb5a",
    "name": "node",
    "email": "node@gmail.com",
    "password": "$2a$10$socLxSzeIz2Gre/fZ6QWZO0rotMjNJmurQglmffQkJsJU2w1vsVPi",
    "__v": 0
  }
]
```

### Property Management

**Create Property**

- Route: POST /api/properties/
- Description: Create a new property with images
- Request Body:(in form data)
```bash
  {
title        Luxury Apartment
description  Spacious, modern apartment 
location     surat
price        3000000
images       uploads house plan.jpg

}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  {
  "title": "Luxury Apartment",
  "description": "Spacious, modern apartment ",
  "location": "surat",
  "price": 3000000,
  "images": [],
  "user": "675ba7dd8e1ea8ff253f87f5",
  "_id": "67629ba3f2727983cee29e83",
  "createdAt": "2024-12-18T09:53:39.890Z",
  "updatedAt": "2024-12-18T09:53:39.890Z",
  "__v": 0
}
```

**View All Properties**
- Route: GET /api/properties/
- Description: View all properties 
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
 [
  {
    "_id": "67629ba3f2727983cee29e83",
    "title": "Luxury Apartment",
    "description": "Spacious, modern apartment ",
    "location": "surat",
    "price": 3000000,
    "images": [],
    "user": {
      "_id": "675ba7dd8e1ea8ff253f87f5",
      "name": "abc",
      "email": "abc@gmail.com"
    },
    "createdAt": "2024-12-18T09:53:39.890Z",
    "updatedAt": "2024-12-18T09:53:39.890Z",
    "__v": 0
  }
]
```

**Update Property**
- Route: PUT /api/properties/:id
- Description: Update a property by ID 
- Request Body:
```bash
 {
  "title":"Heaven"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  {
  "_id": "67629ba3f2727983cee29e83",
  "title": "Heaven",
  "description": "Spacious, modern apartment ",
  "location": "surat",
  "price": 3000000,
  "images": [],
  "user": "675ba7dd8e1ea8ff253f87f5",
  "createdAt": "2024-12-18T09:53:39.890Z",
  "updatedAt": "2024-12-18T10:01:11.075Z",
  "__v": 0
}
```

**Delete Property**
- Route: DELETE /api/properties/:id
- Description: Delete a property by ID
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "message": "Property deleted successfully"
 }
```

### Booking Management
  
  **Create Booking**

- Route: POST /api/bookings/
- Description: Create a new booking
- Request Body:
```bash
  {
  "property": "67629feaf2727983cee29e90",
  "startDate": "2024-12-10",
  "endDate": "2024-12-15"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "message": "Booking created successfully"
  }
```

**Delete Booking**

- Route: DELETE /api/bookings/:id
- Description: Delete a booking by ID
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "message": "Booking deleted successfully"
 }
```

