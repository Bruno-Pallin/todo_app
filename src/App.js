import React from 'react';
export default class TodoApp extends React.Component {
  
  state = {
    inputValue: '',
    todoList: [
      'TCC',
      'Curso React',
      'Comprar caderno'
    ],
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSave(e) {
    const { inputValue, todoList } = this.state;
    this.setState({
      inputValue: '',
      todoList: [
        ...todoList,
        inputValue
      ]
    })
  }
  
  render() {
    const {inputValue, todoList} = this.state;
    return (
      <div>
        <h1>TodoApp</h1>
        <input 
          value={inputValue}
          onChange={(e) => this.handleChange(e)}
          placeholder='Escreva aqui...'
        />
        <button onClick={(e) => this.handleSave(e)}>Salvar</button>

        <ul>
          {todoList.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
      </div>
    );
  }
}