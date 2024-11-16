import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li style={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)} // Toggle completion status
        style={styles.checkbox}
      />
      <span
        style={{
          ...styles.text,
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  checkbox: {
    marginRight: '10px',
  },
  text: {
    flex: 1,
    fontSize: '16px',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default TodoItem;
