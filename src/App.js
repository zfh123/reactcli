import React, { Component } from 'react';
import './static/css/App.css';

import Header from './components/Header.jsx';
import Contain from './components/Contain.jsx';
import Footer from './components/Footer.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Contain></Contain>
        <Footer/>
      </div>
    );
  }
}

export default App;
