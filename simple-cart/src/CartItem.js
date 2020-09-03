import React from 'react';
import './styles/CartItem.css';

const CartItem = (props) => {
  const {id, name, price, qty} = props.item;
  const {updateQty} = props;

  const addOne = () => {
    updateQty(id, qty+1);
  }

  const minusOne = () => {
    updateQty(id, qty-1);
  }

  return(
    <div className="CartItem">
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button onClick={minusOne} disabled={qty<2 && true}>-</button>
        {qty}
        <button onClick={addOne}>+</button>  
      </div>
      <div>Total: ${qty * price}</div>
    </div>
  ) 
}

export default CartItem;