import React from 'react';
import './App.css';
import Home from './Home';
import AddProduct from './AddProduct/AddProduct';
import Topbar from './Topbar/Topbar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <br />
        <Switch>
          <Route
            exact
            path="/"
            render={( props ) => {
              return <Home {...props} />;
            }}
          />
          <Route path="/add" component={AddProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
