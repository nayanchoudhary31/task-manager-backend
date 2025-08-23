# 📝 Task Manager - Task Management API

A robust RESTful API built with Node.js and Express.js for efficient task management. This backend service provides complete CRUD operations with comprehensive validation and error handling.

## 🚀 Features

- **Complete CRUD Operations** - Create, Read, Update, and Delete tasks
- **Input Validation** - Comprehensive validation for all endpoints
- **Error Handling** - Centralized error handling with proper HTTP status codes
- **Request Logging** - Middleware for logging all incoming requests
- **RESTful Design** - Follows REST API conventions and best practices
- **Modular Architecture** - Clean separation of concerns with controllers, routes, and middlewares

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **body-parser** - Request body parsing middleware

## 📋 Prerequisites

- Node.js (v14 or higher)
- pnpm (recommended) or npm

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Start the Server

```bash
npm start
# or
node src/server.js
```

The server will start on `http://localhost:3002`

### 4. Environment Variables

- `PORT` - Server port (default: 3002)

## 📚 API Documentation

### Base URL

`http://localhost:3002/api`

### Endpoints

| Method   | Endpoint     | Description     | Request Body                                       |
| -------- | ------------ | --------------- | -------------------------------------------------- |
| `GET`    | `/tasks`     | Get all tasks   | -                                                  |
| `GET`    | `/tasks/:id` | Get task by ID  | -                                                  |
| `POST`   | `/tasks`     | Create new task | `{ "taskName": "string" }`                         |
| `PUT`    | `/tasks/:id` | Update task     | `{ "taskName": "string", "isCompleted": boolean }` |
| `DELETE` | `/tasks/:id` | Delete task     | -                                                  |

## 📁 Project Structure

```
src/
├── models/
│ └── taskModel.js # Business logic and data operations
├── controllers/
│ └── taskController.js # HTTP request/response handling
├── routes/
│ └── taskRoutes.js # API route definitions
├── middlewares/
│ ├── validation.js # Input validation middleware
│ ├── errorHandler.js # Global error handling
│ └── requestLogger.js # Request logging middleware
├── utils/
│ └── errors.js # Custom error classes
├── app.js # Express app configuration
└── server.js # Server entry point
```

## 🔧 Component Descriptions

### **Models** (`src/models/`)

- **`taskModel.js`** - Contains all business logic for task operations
  - Handles data storage (in-memory array)
  - Performs CRUD operations
  - Throws custom errors for business rule violations
  - Validates data before processing

### **Controllers** (`src/controllers/`)

- **`taskController.js`** - Handles HTTP requests and responses
  - Receives requests from routes
  - Calls model methods for business logic
  - Formats responses for clients
  - Passes errors to error handler

### **Routes** (`src/routes/`)

- **`taskRoutes.js`** - Defines API endpoints
  - Maps HTTP methods to controller functions
  - Applies validation middleware
  - Handles URL parameters

### **Middlewares** (`src/middlewares/`)

- **`validation.js`** - Validates incoming request data
  - Checks data types and formats
  - Ensures required fields are present
  - Throws custom validation errors
- **`errorHandler.js`** - Centralized error handling
  - Catches all application errors
  - Logs errors for debugging
  - Sends consistent error responses
- **`requestLogger.js`** - Logs all incoming requests
  - Records request details
  - Helps with debugging and monitoring

### **Utils** (`src/utils/`)

- **`errors.js`** - Custom error classes

  - `NotFoundError` - For missing resources (404)
  - `ValidationError` - For invalid data (400)
  - Provides consistent error structure

  ## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

- **Name**: Nayan Choudhary
- **Email**: nayanscsit09@gmail.com
- **GitHub**: nayanchaudhary31

## 🔮 Future Enhancements

- [ ] **Database Integration** - MongoDB or PostgreSQL
- [ ] **User Authentication** - JWT-based authentication
- [ ] **Task Categories** - Organize tasks by categories
- [ ] **Task Priority** - Priority levels (Low, Medium, High)
- [ ] **Due Dates** - Task deadlines and reminders
- [ ] **Search & Filter** - Advanced task filtering
- [ ] **API Rate Limiting** - Prevent abuse
- [ ] **Unit & Integration Tests** - Comprehensive test coverage
- [ ] **Docker Support** - Containerization
- [ ] **CI/CD Pipeline** - Automated testing and deployment
- [ ] **API Documentation** - Swagger/OpenAPI documentation
- [ ] **Real-time Updates** - WebSocket support

## 📞 Support

For support and questions, please open an issue on GitHub or contact the maintainer.

---

**Made with ❤️ using Node.js and Express.js**
