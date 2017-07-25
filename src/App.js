import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';
import { addTodo } from './actions';
import FileInput from 'react-file-input';
import Header from './components/header/';

import LinearProgress from 'material-ui/LinearProgress';

import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      image: undefined,
    };
  }

  handleFile (file) {
    this.setState({
      image: file.target.files[0],
    });

    // Object.keys(file).map(key => console.log(key));
  }

  handleInputs () {
    const rows = [];
    for (let i = 0; i < this.props.counter; i++) {
      rows.push(
        <div>
          <input
            type="file"
            name="fileInput"
            className="fileInput"
            key={i}
            onChange={(event) => this.handleFile(event)}
            placeholder="Add Image"
          />
          <button className="button process">Process Image</button>
          <LinearProgress max="100" />
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
      <div className="App">
        <Header />
        <div className="main">
          <div className="controls">
            <button className="button add" onClick={this.props.increment}>+</button>
            <span>Click to add another image</span>
          </div>
          <div className="input">
            {this.handleInputs()}
          </div>
        </div>
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
  increment: () => dispatch(increment()),
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
