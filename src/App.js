import React, { Component } from 'react';
import './styles/app.css';
import List from'./List.js';

class App extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div className='app-wrapper'>
        <h1>Contact Tree</h1>
        <List items={contacts} />
      </div>
    );
  }
}

export default App;
