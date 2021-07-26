import React, { Component } from 'react';
import'./App.css'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios'

export class App extends Component {
  state={
    user:[],
    loading:false
  }

  async componentDidMount(){
    this.setState({loading: true})
    const res = await axios.get('https://api.github.com/users');
    this.setState({user:res.data, loading:false})
    // console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.user}/>
        </div>
        
      </div>
    )
  }
}

export default App
