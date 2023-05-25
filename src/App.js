import React from 'react';
import './index.css';

function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
    setIsHighlighted(false);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
      setIsHighlighted(true);
      setTimeout(() => {
        setIsHighlighted(false);
      }, 1000);
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleTodoTextChange = (index, newText) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-list">
      <h2>My To-Do List</h2>

      <div className={`add-todo ${isHighlighted ? 'highlight' : ''}`}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todos">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onTodoTextChange={handleTodoTextChange}
          />
        ))}
      </ul>

      <p className="counter">Total todos: {todos.length}</p>
    </div>
  );
}

function TodoItem({ todo, index, onDeleteTodo, onToggleTodo, onTodoTextChange }) {
  const handleCheckboxChange = () => {
    onToggleTodo(index);
  };

  const handleDeleteClick = () => {
    onDeleteTodo(index);
  };

  const handleTextChange = (event) => {
    onTodoTextChange(index, event.target.value);
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        <input
          type="text"
          value={todo.text}
          onChange={handleTextChange}
          className="todo-text"
        />
      </label>
      <button className="delete-button" onClick={handleDeleteClick}>
        &#x2716;
      </button>
    </li>
  );
}

export default TodoList;
