# 📚 Student Result Management System

A modern React application for managing student results with full CRUD operations, powered by JSON Server.

## 🚀 Features

- ✅ Add new students with name, section, marks, and grade
- ✅ View all students in a beautiful table
- ✅ Edit existing student information
- ✅ Delete students with confirmation
- ✅ View detailed student information
- ✅ Modern, responsive UI with clean design
- ✅ No useEffect - all data loading via button clicks
- ✅ JSON Server backend for REST API

## 📂 Project Structure

```
student-result-app/
│── db.json
│── src/
│   ├── components/
│   │    ├── StudentList.jsx
│   │    ├── StudentForm.jsx
│   │    └── StudentDetails.jsx
│   ├── services/
│   │    └── studentService.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
│── public/index.html
│── package.json
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

## 🎯 Running the Application

You need to run TWO terminals:

### Terminal 1 - JSON Server (Backend)
```bash
npm run server
```
This starts the JSON Server on http://localhost:5000

### Terminal 2 - React App (Frontend)
```bash
npm start
```
This starts the React app on http://localhost:3000

## 📡 API Endpoints

- `GET /students` - Get all students
- `POST /students` - Add new student
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

## 💡 Usage

1. Click "Add Student" to add a new student
2. Fill in the form with name, section, marks, and grade
3. Click "Student List" and then "Load Students" to view all students
4. Use action buttons to:
   - **View** - See detailed student information
   - **Edit** - Modify student data
   - **Delete** - Remove student (with confirmation)

## 🎨 UI Features

- Modern gradient design
- Rounded cards with shadows
- Responsive layout
- Color-coded grade badges
- Smooth animations and transitions
- Clean, intuitive navigation

## ⚠️ Important Notes

- No `useEffect` is used - all data loading happens via button clicks
- After deleting a student, click "Load Students" to refresh the list
- All state management uses `useState` only
- The app uses Fetch API for all HTTP requests

## 🔧 Technologies Used

- React 18
- JSON Server
- Fetch API
- CSS3 with modern styling
- Functional Components

## 📝 License

This project is open source and available for educational purposes.
