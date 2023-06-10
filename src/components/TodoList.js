import React from 'react';

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
  );
}

export default TodoList;