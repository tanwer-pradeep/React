import React, { Component } from 'react';
import'./App.css'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" />
        <h1>Hello</h1>
        <Users/>
        
      </div>
    )
  }
}

export default App
