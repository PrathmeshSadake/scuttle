import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';


function App() {
  return (
    <div>
      {/* Switch renders on one route witch matches. Useful when we  */}
     <Switch>
        {/* exact={ false } to keep exact as false default value is true */}
      <Route exact path='/' component={HomePage}/>
     </Switch>
    </div>
  );
}

export default App;
