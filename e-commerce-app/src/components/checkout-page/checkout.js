import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JWT from 'jsonwebtoken';
import "./checkout.css";

const BASE_URL = "https://hkp-training-teamprj.herokuapp.com";

const Checkout = (props) => {
    const [items, setItems] = useState([]);  
    var totalCost = 0;
    const token = localStorage.getItem('token');
    const userId = JWT.decode(token,'Put secret in .env!!!')._id;

    const getCart = () => {
        const requestHeaders = {
            method: 'GET',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        };

        fetch(`${BASE_URL}/users/${userId}/cart-items`, requestHeaders)
        .then((res) => res.json())
        .then((data) => {
            setItems(data.items);
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const checkout = () => {
        const requestHeaders = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        fetch(`${BASE_URL}/users/${userId}/cart-items/checkout`, requestHeaders)
        .then(res => props.history.push('/main-user'))   // redirect back to main page
    }

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div id="checkout-page-container">
            <div id = "checkout-page-header">
                <h1>Shopping</h1>
                <Link to="/main-user">
                    <button>Back</button>
                </Link>
            </div>
            <h2>Checkout</h2>
            <table id="cart-items-list">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(item => {
                        totalCost += parseFloat(item.price * item.quantity);
                        return (
                            <tr>
                                <td className = "cart-items">{item.itemname}</td>
                                <td className = "cart-items">{item.quantity}</td>
                                <td className="total-price-col cart-items">${item.price * item.quantity}</td>
                            </tr>
                        )
                    })
                }
                <tr id="total-row">
                    <td></td>
                    <td id="total-price-label">Total:</td>
                    <td id="total-price-cell">${totalCost}</td>
                </tr>
                </tbody>
            </table>
            <div id="checkout-btn-container"><button onClick={checkout} id="checkout-btn">Checkout</button></div>
        </div>
    )
}
export default Checkout;