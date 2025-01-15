import React from 'react';
import './App.css'

import Navigator from './Components/Navigation/Navigator.jsx';
import Router from './Components/Navigation/Router.jsx';
/*
import Home from './screens/Home.jsx';
import Counter from './Components/Counter/Counter.jsx';
import FilterableProductTable from './Components/Home/FilterableProductTable.jsx';
 
*/
function App() {
  return (
    <>
        <Navigator />
        <Router />
    </>
  )
}

export default App;