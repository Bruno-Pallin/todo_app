import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm = ({ text, setText, addTodo }) => {
  return (
    <form
      className='row'
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text)
      }}>
      <div className='input-field col s10'>
        <input
          id='todo-input'
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <label htmlfor='todo-input'>Novo Todo</label>
      </div>
      <div className='input-field col s2'>
        <button className='btn waves-effect waves-light'>
          Salvar</button>
      </div>
    </form>
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