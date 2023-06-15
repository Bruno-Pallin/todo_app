import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm = ({ text, setText, addTodo }) => {
  return (
    <React.Fragment>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Salvar</button>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    text: state.text,
  }
};

const mapDispatchToProps = { setText, addTodo };
/*
A função completa é essa, porém como é um padrão a forma acima funciona corretamente
function mapDispatchToProps(dispatch) {
  return {
    setText: text => dispatch(setText(text))
  }
}
*/
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);