import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileInput from 'react-file-input';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import { addTodo } from '../../actions';
import { increment } from '../../actions';
import { decrement } from '../../actions';
import './style.css';

class Task extends Component {

  constructor (props) {
    super(props);

    this.state = {
      loaded: 0,
      converted: false
    };
  }

  displayProgress () {
    this.timer = setTimeout(() => this.progress(5), 1000);
    this.setState({loaded: 1});
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  progress (completed) {
    if (completed > 100) {
      this.setState({loaded: 2});
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  handleChange (event) {
    this.props.addTodo(event);
    this.props.increment();
  }

  render () {
    if (this.state.loaded === 0) {
      return (
        <div className="task">
          <input
            type="file"
            name="fileInput"
            className="fileInput"
            key={this.props.key}
            onChange={(event) => this.props.addTodo(event)}
            placeholder="Add Image"
          />
          <button onClick={() => this.displayProgress()} className="button process">Process Image</button>
        </div>
      );
    } else if (this.state.loaded === 1) {
      return (
        <div className="task">
          <input
            type="file"
            name="fileInput"
            className="fileInput"
            key={this.props.key}
            onChange={(event) => this.handleChange(event)}
            placeholder="Add Image"
          />
          <button className="button process">Process Image</button>
          <LinearProgress
            max={100}
            min={0}
            mode="determinate"
            style={{flex: 2, marginLeft: 2}}
            value={this.state.completed}
          />
        </div>
      );
    } else {
      return (
        <div className="task">
          <input
            type="file"
            name="fileInput"
            className="fileInput"
            key={this.props.key}
            onChange={(event) => this.props.addTodo(event)}
            placeholder="Add Image"
          />
          <button className="button process">Process Image</button>
          <button onClick={''} className="button process">Download JPG Image</button>
        </div>
      );
    }
  }
}

Task.PropTypes = {
  key: PropTypes.number,
};

const mapStateToProps = (state) => ({
  // Map your state to props
  counter: state.counter,
  taskCounter: state.taskCounter,
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions to props
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  addTodo: (file) => dispatch(addTodo(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
