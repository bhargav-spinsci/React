import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RestComponent from './RestComponent';

class App extends Component {
  render() {
    return (
      <div>
       <RestComponent/>
      {/* <header>
          
          <img src={logo} className="App-logo" alt="logo" />--> */}
          {/*ReactDOM.render(,document.getElementById('root'));
        </header>*/}
      </div>
    );
  }
}
export default App;
