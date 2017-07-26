import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import FileInput from 'react-file-input';
import LinearProgress from 'material-ui/LinearProgress';
import Task from '../task/';

class Tasks extends Component {

  handleInputs () {
    const rows = [];
    for (let i = 0; i < this.props.counter; i++) {
      rows.push(
        <Task key={i} />
      );
    }
    return (
      <div className="container">
        {rows}
      </div>
    );
  }

  render () {
    return (
      <div className="tasks">
        {this.handleInputs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  counter: state.counter,
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions to props
  addTodo: (file) => dispatch(addTodo(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
