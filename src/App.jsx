import React from 'react';
import './App.css'

import Home from './screens/Home.jsx';
import Counter from './Components/Counter/Counter.jsx';
import FilterableProductTable from './Components/Home/FilterableProductTable.jsx';

 const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  return (
    <>
        <Home />
        <Counter />
        <FilterableProductTable products={PRODUCTS} />
    </>
  )
}

export default App;

//<FilterableProductTable products={PRODUCTS} />