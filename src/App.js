import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateMap from './components/map'

class App extends Component {





  render() {
    return (
      <main>
        <div id="root">
          <CreateMap />
        </div>
      </main>
    );
  }
}





export default App;
