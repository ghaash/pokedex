import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          {/*
          1. have a text box in which the user types in a pokemon name
          2. clicks submit
          3. the value is passed to fetch()
          4. fetch() calls the pokeapi with the submitted value
          */}
          <div>
            <p>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
