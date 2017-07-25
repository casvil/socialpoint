import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';
import { addTodo } from './actions';
import FileInput from 'react-file-input';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: undefined,
    };
  }

  handleFile (file) {
    this.setState({
      image: file.target.files[0],
    });

    Object.keys(file).map(key => console.log(key));
    console.log(file.currentTarget);
  }

  handleChange (event) {
    console.log('Selected file:', event.target.files[0]);
  }

  handleInputs () {
    const rows = [];
    for (let i = 0; i < this.props.counter; i++) {
      rows.push(<FileInput />);
    }
    return <div>{rows}</div>;
  }

  render () {
    return (
      <div className="App">
        <div className="header"></div>
        <div className="main">
          <div>
            <button onClick={this.props.increment}>+</button>
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
