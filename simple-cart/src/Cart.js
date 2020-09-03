import React, {useState, useEffect} from 'react';
import CartItem from './CartItem';
import './styles/Cart.css'

const Cart = ({items}) => {
  const initialState = JSON.parse(window.localStorage.getItem('items'));
  const [myItems, setMyItems] = useState(initialState || items);

  const grandTotal = myItems.reduce((total, item) => (
    total + item.qty * item.price
  ), 0).toFixed(2)

  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(myItems));
  }, [myItems])

  const updateQty = (id, qty) => {
    // make a new item array
    const newItems = myItems.map(item => {
      if (item.id === id){
        return {...item, qty:qty}
      }
      return item;
    })
    setMyItems(newItems);
  };
  
  

  return (
    <div className="Cart">
      <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
        {myItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item}
            updateQty={updateQty}
          />
        ))}
      </div>
        <h2 className="Cart-total">Grand Total: ${grandTotal}</h2>
    </div>
  )
}

export default Cart;

