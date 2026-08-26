📝 Todo List

A modern, responsive Todo List application built with React.js. The application allows users to create, manage, update, complete, and delete tasks with a clean and user-friendly interface.

The project focuses on practical React concepts such as Context API, Hooks, component-based architecture, state management, and browser localStorage.

🚀 Live Demo

Live Application: https://todo-list-using-react-8ot5.vercel.app/
📌 Features
➕ Add new tasks
✏️ Edit existing tasks
✅ Mark tasks as completed
🗑️ Delete tasks
💾 Persist todos using Local Storage
⚡ Fast and responsive interface
📱 Responsive design for different screen sizes
🧩 Reusable React components
🌐 Deployed on Vercel
🛠️ Tech Stack
Frontend
React.js
JavaScript (ES6+)
HTML5
CSS3
React Concepts Used
useState
useEffect
useContext
Context API
Functional Components
Props
Event Handling
Conditional Rendering
Storage
Browser Local Storage
Deployment
Vercel
📂 Project Structure
todo-list/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── context/
│   │   ├── TodoContext.js
│   │   └── TodoContextProvider.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/your-todo-repository.git
2. Navigate to the project directory
cd your-todo-repository
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will run locally, usually at:

http://localhost:5173
5. Build for production
npm run build
6. Preview the production build
npm run preview
🧠 How It Works

The application follows a component-based architecture.

Todo Context

The Context API is used to manage todo-related state and functions globally.

The context provides operations such as:

Adding a todo
Updating a todo
Deleting a todo
Completing a todo

This avoids unnecessary prop drilling between components.

Local Storage

Todo data is stored in the browser's localStorage so that tasks remain available even after refreshing or reopening the browser.

The application:

Loads existing todos from localStorage.
Updates the state when the user performs an action.
Saves the updated todo list back to localStorage.


🔄 Application Flow
User Action
     ↓
React Component
     ↓
Todo Context
     ↓
State Update
     ↓
UI Re-render
     ↓
Local Storage Update
🎯 Learning Objectives

This project was built to strengthen practical understanding of:

React component architecture
State management
Context API
React Hooks
Local Storage
Event handling
CRUD operations
Reusable components
Modern frontend development
Production deployment

📸 Screenshots

screenshots/
├── todo-home.png
└── completed-todo.png

You can then add them to this README using:

![Todo List](screenshots/todo-home.png)
🔮 Future Improvements

Possible improvements for future versions:

Add dark/light mode

Add task categories

Add due dates and reminders

Add search functionality

Add filtering by completed/pending tasks

Add drag-and-drop task ordering

Add animations and transitions

Add user authentication

Add backend database support

Sync todos across multiple devices

📚 What I Learned

While building this project, I gained practical experience with React Hooks, Context API, state management, component communication, CRUD operations, and localStorage.

The project also helped me understand how to structure a React application into smaller, reusable components and how to deploy a frontend application to a production environment.


🤝 Contributing

Contributions are welcome!

To contribute:

Fork the repository.
Create a new branch.
Make your changes.
Commit your changes.
Push the branch.
Create a Pull Request.
📄 License

This project is open-source and available under the MIT License.

👩‍💻 Author:

Aayushi Rawat

B.Tech — Computer Science & Engineering

⭐ If you found this project useful, consider giving the repository a star!
