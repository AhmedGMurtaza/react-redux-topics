import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// redux
import { connect } from 'react-redux';
import {startAction} from './actions/startAction';
import {stopAction} from './actions/stopAction';

class App extends Component {
  render() {
    console.log('run')
    const { startAction, stopAction, rotating} = this.props;
    return (
      <div className="App" onClick={rotating?stopAction:startAction}>
        <header className="App-header">
          <img src={logo} className={`App-logo ${rotating?'':'app-logo-paused'}`} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
