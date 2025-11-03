import React, { useContext } from 'react';
import TaskForm from './components/TaskForm';
import { useTasks } from './hooks/useTasks';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import './index.css';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            className={task.done ? 'done' : ''}
            onClick={() => toggleTask(task.id)}
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

function AppContent() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app-container">
      <h1>📝 Personal Task Manager</h1>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
