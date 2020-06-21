import React from 'react';
import './App.css';

import Topbar from './Topbar/Topbar';
import ShoppingList from './ShoppingList/ShoppingList';
import Sort from './Sort/Sort';

function App() {
  return (
    <div className="App">
      <Topbar />
      <br />
      <Sort />
      <ShoppingList />
    </div>
  );
}

export default App;
