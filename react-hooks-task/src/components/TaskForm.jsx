import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setErrors({ title: 'Task title cannot be empty' });
      return;
    }

    onAddTask({
      id: Date.now(),
      title,
      done: false,
    });

    setTitle('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
    </form>
  );
}

export default TaskForm;
