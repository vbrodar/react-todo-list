import React, { useState, useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, status]);

  // Functions

  return (
    <div className="App">
      <header>
        <h1>Things to do</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setInputText={setInputText}
      />

      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
      <footer>
      <div className="social-links">
        <a href="https://github.com/vbrodar" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://gitlab.com/vbrodar" rel="noopener noreferrer" target="_blank">
        <i class="fa fa-gitlab" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/thewaywardone" rel="noopener noreferrer" target="_blank">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </div>
      </footer> 
    </div>
  );
}

export default App;
