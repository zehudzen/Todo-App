import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: task }]);
      setTask('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="App">
      <h1>Todo Uygulaması</h1>
      <div className="todo-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Yapılacakları girin"
        />
        <button onClick={addTodo}>Ekle</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {`${todo.id}. ${todo.text}`}
            <button onClick={() => removeTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
