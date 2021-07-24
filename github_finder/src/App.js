import React ,{ Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserItem from './components/UserItem'

class App extends Component{


  render(){
    return(
      
      <div className="App">
        <Navbar />
        <UserItem/>
        <UserItem/>
        <UserItem/>
        <UserItem/>
        <UserItem/>

        
      </div>
    )
    
  }



}

export default App;






// by default app.js is a functional component

// function App() {
//   return (
//     <>
//     hello
//     </>
//   );
// }

 