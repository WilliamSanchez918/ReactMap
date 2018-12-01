import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';
import CreateMap from './components/map'
import { requestUrl, params } from './utils/foursquareAPI'


class App extends Component {


  

  render() {
    return (
      <main>
        <div className="App" id="root">
        <header className="App-header" id="centerHeader"> Top 30 - Popular Restaurants in Tulsa>
        </header>
        <Route path="/" render={() => (
          <CreateMap url={requestUrl} param={params}/>
          )} 
        />

          
        </div>
      </main>
    );
  }
}






export default App;
