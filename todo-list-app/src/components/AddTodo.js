import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.trim()) {
      addTodo(input); 
      setInput(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update state with user input
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 15px' }}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
