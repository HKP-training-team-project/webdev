import React, { useState } from 'react';
import JWT from 'jsonwebtoken';
import "./item.css";

const BASE_URL = "https://hkp-training-teamprj.herokuapp.com";

const Item = (props) => {
  const itemDetails = props.location.state;
  const [quantity, setQuantity] = useState(0);
    
  const addToCart = () => {
    const token = localStorage.getItem('token');
    const userId = JWT.decode(token,'Put secret in .env!!!')._id;
    
    const requestHeaders = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 
        _id: itemDetails.id,
        itemname: itemDetails.name,
        price: itemDetails.price,
        quantity: quantity.toString()
      })
    };

    fetch(`${BASE_URL}/users/${userId}/cart-items`, requestHeaders)
      .then(res => props.history.push('/main-user'))   // redirect back to main page
  }

    return (
        <div id="user-item-page-container">
            <div id="user-item-container">
                <h3 id="user-item-page-name">{itemDetails.name}</h3>
                <img src={`${BASE_URL}/${itemDetails.imgs[0]}`} alt={itemDetails.name} width="200px"/>
                <p id="user-item-page-description">{itemDetails.description}</p>
                <div id="item-price-container">
                    <p id="user-item-page-price">${itemDetails.price} x </p>
                    <input type="number" id="user-item-page-quantity" min="0" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)}/>
                    {   (itemDetails.price * quantity) >= 0
                        ? <p id="user-item-total-cost">= ${itemDetails.price * quantity}</p>
                        : <div></div>
                    }
                </div>
                <button onClick={addToCart} id="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}
export default Item;