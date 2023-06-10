import React from 'react';

export default class TodoForm extends React.Component {
  state = {
    inputValue: '',
  }

  onChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  };

  onClick(e) {
    const newTodo = this.state.inputValue;

    this.props.onSaveTodo(newTodo);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <React.Fragment>
        <input
          value={inputValue}
          onChange={e => this.onChange(e)}
        />
        <button onClick={(e) => this.onClick(e)}>Salvar</button>
      </React.Fragment>
    );
  }
}