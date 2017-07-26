import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';
import Header from './components/header/';
import Tasks from './containers/tasks/';

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
            <Tasks />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions to props
  increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
