import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actions';
import { addTodo } from '../../actions';
import FileInput from 'react-file-input';

import LinearProgress from 'material-ui/LinearProgress';

class Tasks extends Component {

  constructor (props) {
    super(props);
  }

  handleFile (file) {
    this.setState({
      image: file.target.files[0],
    });

    // Object.keys(file).map(key => console.log(key));
  }

  progress (completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  handleInputs () {
    const rows = [];
    for (let i = 0; i < this.props.counter; i++) {
      rows.push(
        <div className="row" key={i}>
          <input
            type="file"
            name="fileInput"
            className="fileInput"
            key={i}
            onChange={(event) => this.handleFile(event)}
            placeholder="Add Image"
          />
          <button className="button process">Process Image</button>
          <LinearProgress
            max={100}
            min={0}
            mode="determinate"
            style={{flex: 2, marginLeft: 2}}
          />
        </div>
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
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions to props
  addTodo: (file) => dispatch(addTodo(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
