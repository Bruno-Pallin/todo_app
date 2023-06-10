import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
export default class TodoApp extends React.Component {
  state = {
    todoList: [],
  }

  onSaveTodo(newTodo) {
    const todoList = this.state.todoList;
    this.setState({
      todoList: [
        ...todoList,
        newTodo
      ]
    })
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
        <TodoForm
          onSaveTodo={newTodo => this.onSaveTodo(newTodo)} />
          
        <TodoList todoList={ todoList }/>
      </div>
    );
  }
}