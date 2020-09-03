import React from 'react';
import Cart from './Cart';


const items = [
  {id:1, name: 'Taco Seasoning', price: 2.25, qty:0},
  {id:2, name: 'Pinto Beans', price: 1.99, qty:0},
  {id:3, name: 'Sour Cream', price: 3.50, qty:0},
]

const App = () => (
  <div>
    <Cart items={items}/>
  </div>
);


export default App;
