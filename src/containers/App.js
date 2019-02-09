import React, { Component } from 'react';
import CampaignList from '../components/CampaignList/CampaignList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CampaignList />
      </div>
    );
  }
}

export default App;
