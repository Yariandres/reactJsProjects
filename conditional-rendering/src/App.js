import React from 'react';
import './App.css';
import {List, LoadingIndicator } from './Conditional';

const productList = [
  {
    name: "Water Bottle"
  },
  {
    name: "Hand Cream"
  },
  {
    name: "HP Computer"
  },
  {
    name: "Yoga Mat"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List list={productList}/>
        <div style={{marginTop: "5rem"}}>
          <LoadingIndicator isLoading={false}/>
        </div>
      </header>
    </div>
  );
}

export default App;
