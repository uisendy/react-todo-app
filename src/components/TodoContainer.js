import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

import { v4 as uuidv4 } from 'uuid';
import NavBar from './NavBar';

export class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodoItem = (title) => {
    const newTodoItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState((state) => ({ todos: [...state.todos, newTodoItem] }));
  };
  handleChange = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <NavBar />
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            setUpdate={this.setUpdate}
          />{' '}
        </div>
      </div>
    );
  }
}

export default TodoContainer;
