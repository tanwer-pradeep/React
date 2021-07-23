import React ,{ Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';


// here we are making it a class component
class App extends Component{

  /* we can't return from class component directly
 so we need to call a lifecycle method "render"
 from which we will return reqired code */

  render(){
    return(
      /* 
      the code here looks like html but its 
      JSX and we can only return only single parent 
      from jsx code this mean we can only return only 
      one div from jsx code 
      */
      <div className="App">
        <Navbar />
        <h2>
          This is 1st React app.
        </h2>
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

 