# 📝 Blogs Backend - Task Management API

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
cd blogs-backend
```

### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 3. Start the Server
```bash
node src/server.js
```

The server will start on `http://localhost:3002`

### 4. Environment Variables
- `PORT` - Server port (default: 3002)


### File Descriptions

- **`taskController.js`** - Contains all task-related business logic (CRUD operations)
- **`taskRoutes.js`** - Defines API routes and applies middleware
- **`validation.js`** - Input validation middleware for request data
- **`errorHandler.js`** - Global error handling middleware
- **`requestLogger.js`** - Logs all incoming requests for debugging
- **`app.js`** - Express app configuration and middleware setup
- **`server.js`** - Server initialization and port configuration

## 🔧 Development

### Available Scripts
```bash
npm test    # Run tests (currently not implemented)
```

### Adding New Features

1. **Create Controller** - Add business logic in `src/controllers/`
2. **Define Routes** - Add API endpoints in `src/routes/`
3. **Implement Validation** - Add validation rules in `src/middlewares/validation.js`
4. **Update App Configuration** - Register new routes in `src/app.js`


### Production Considerations
- Set appropriate environment variables
- Use a process manager (PM2, Forever)
- Implement proper logging
- Add security middleware
- Use HTTPS in production


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

- **Name**: Nayan Choudhary
- **Email**: nayanscsit09@gmail.com
- **GitHub**:nayanchaudhary31

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