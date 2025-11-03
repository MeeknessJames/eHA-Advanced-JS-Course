# 📝 Personal Task Manager

A simple yet elegant **React Task Manager App** that allows users to create, track, and manage their personal tasks efficiently.  
This project demonstrates the use of **React Hooks** — `useState`, `useEffect`, and `useContext` — to handle state, side effects, and global theming.


## 🚀 Features

✅ **Add Tasks** – Create new tasks easily through a simple form  
✅ **Mark as Done/Undone** – Click on any task to toggle its completion status  
✅ **Delete Tasks** – Remove tasks that are no longer needed  
✅ **Persistent Storage** – Tasks are saved automatically using `localStorage`  
✅ **Light/Dark Mode** – Switch between themes using a global `ThemeContext`  
✅ **Responsive & Minimal UI** – Clean design that works on any device  


## 🧠 Concepts Practiced

This project covers key **React Hooks** concepts:
- `useState` for managing component-level state
- `useEffect` for data persistence and side effects
- `useContext` for global theme management
- Custom hooks (`useTasks`) for reusable logic

---

## 🛠️ Technologies Used

| Tool | Purpose |
|------|----------|
| React.js | Frontend framework |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling and responsive layout |
| localStorage API | Data persistence |
| Context API | Theme management |


## 💻 Project Structure

```
src/
├── components/
│ └── TaskForm.jsx # Handles new task input
├── hooks/
│ └── useTasks.js # Custom hook for task management
├── context/
│ └── ThemeContext.jsx # Global theme context
├── App.jsx # Main app layout and integration
├── index.css # App styling (light/dark theme)
└── index.js # Entry point
```

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```
```bash
git clone https://github.com/MeeknessJames/react-hooks-task.git
```

2️⃣ Navigate into the Project Folder
```
cd react-hooks-task
```

3️⃣ Install Dependencies
```
npm install
```

4️⃣ Start the Development Server
```
npm start
```
Your app will run at 👉 http://localhost:3000

🌗 Theme Preview
Light Mode	Dark Mode
✅ Clean white interface	🌙 Sleek dark background
Easy on the eyes, Great for night mode

👩🏽‍💻 Author

Meekness Iruoma James
📍 Port Harcourt, Rivers State, Nigeria
📧 Meeknessjames1@gmail.com

🏁 License
This project is licensed under the MIT License – feel free to use and modify it for your own learning or portfolio.
