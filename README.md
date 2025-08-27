# 📝 Task Manager - Task Management API

A robust RESTful API built with Node.js, Express.js, and Prisma (PostgreSQL) for efficient task management. This backend service provides complete CRUD operations with validation and centralized error handling.

## 🚀 Features

- **Complete CRUD Operations** - Create, Read, Update, and Delete tasks
- **Input Validation** - Validation for task creation and updates
- **Error Handling** - Centralized error handling with consistent responses
- **Request Logging** - Lightweight middleware logs incoming requests
- **RESTful Design** - Follows REST conventions
- **Prisma ORM** - PostgreSQL-backed persistence with schema migrations

## Technologies Used

- **Node.js**
- **Express.js** (v5)
- **Prisma** ORM with **PostgreSQL**
- **body-parser** for JSON parsing (via router)

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- pnpm or npm
- A PostgreSQL database
- Prisma CLI (installed via devDependency)

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager-backend
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Configure Environment

Create a `.env` file in the project root:

```bash
cp .env.example .env  # if present, otherwise create manually
```

Add the database URL:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"
PORT=3002
```

### 4. Setup Database with Prisma

```bash
# Generate Prisma client
pnpm exec prisma generate

# Apply migrations (will create/updates tables)
pnpm exec prisma migrate dev --name init
```
Alternatively, you can use the npm scripts:

```bash
pnpm run prisma:generate
pnpm run prisma:migrate:dev
```

### 5. Start the Server

```bash
pnpm run dev   # with nodemon
# or
pnpm start
```

The server runs on `http://localhost:${PORT}` (default: `3002`).

## 📚 API Documentation

### Base URL

`http://localhost:3002/api`

### Endpoints

- `GET /tasks` — Get all tasks
- `GET /tasks/:id` — Get a task by ID
- `POST /tasks` — Create a new task
- `PUT /tasks/:id` — Update a task (name and/or completion)
- `DELETE /tasks/:id` — Delete a task

### Request/Response Details

- **Task model** (`prisma/schema.prisma`):
  - `id: Int (auto-increment)`
  - `taskName: String`
  - `isCompleted: Boolean` (default `false`)
  - `createdAt: DateTime`
  - `updatedAt: DateTime`

#### Create Task

- Method: `POST /tasks`
- Body:
```json
{
  "taskName": "Buy milk"
}
```
- Responses:
  - 201: `{ "message": "Task Added Successfully!", "task": { ... } }`
  - 400: Validation errors

#### Update Task

- Method: `PUT /tasks/:id`
- Body (partial allowed):
```json
{
  "taskName": "Buy milk and eggs",
  "isCompleted": true
}
```
- Responses:
  - 200: `{ "message": "Task Updated Successfully!", "task": { ... } }`
  - 400/404: Validation or Not Found

#### Get All Tasks

- Method: `GET /tasks`
- Response:
```json
{
  "tasks": [
    {
      "id": 1,
      "taskName": "Buy milk",
      "isCompleted": false,
      "createdAt": "2025-08-27T11:50:00.000Z",
      "updatedAt": "2025-08-27T11:50:00.000Z"
    }
  ]
}
```

#### Get Task by ID

- Method: `GET /tasks/:id`
- Response:
```json
{
  "task": { ... }
}
```

#### Delete Task

- Method: `DELETE /tasks/:id`
- Response:
```json
{
  "message": "Task Deleted Successfully!",
  "task": { ... }
}
```

### Error Response Format

Validation errors return:
```json
{
  "error": "Validation Error",
  "message": "Details..."
}
```

Not found:
```json
{
  "error": "Not Found",
  "message": "Task Not Found!"
}
```

Server error:
```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong from server!"
}
```

## 📁 Project Structure

```
src/
├── app.js # Express app configuration
├── server.js # Server entry point
├── controllers/
│ └── taskController.js # Request handlers
├── routes/
│ └── taskRoutes.js # API routes
├── models/
│ └── taskModel.js # Business logic (Prisma-backed)
├── middlewares/
│ ├── validation.js # Request validation
│ ├── errorHandler.js # Centralized error handling
│ └── requestLogger.js # Request logging
├── utils/
│ └── errors.js # Custom errors
└── db/
└── prisma.js # Prisma client and graceful shutdown
prisma/
└── schema.prisma # Prisma schema (PostgreSQL)
```


## 🔧 Development Notes

- Base route prefix: all routes are under `/api/` (see `src/app.js`).
- JSON parsing is enabled globally and via router (`body-parser`).
- Prisma client is generated from `prisma/schema.prisma`.
- Ensure `DATABASE_URL` is set before running migrations or starting the server.

## 🧪 Quick cURL Examples

```bash
# Create
curl -s -X POST http://localhost:3002/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"taskName":"Learn Prisma"}'

# List
curl -s http://localhost:3002/api/tasks

# Get by ID
curl -s http://localhost:3002/api/tasks/1

# Update
curl -s -X PUT http://localhost:3002/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"isCompleted": true}'

# Delete
curl -s -X DELETE http://localhost:3002/api/tasks/1
```

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

- **Name**: Nayan Choudhary
- **Email**: nayanscsit09@gmail.com
- **GitHub**: nayanchaudhary31