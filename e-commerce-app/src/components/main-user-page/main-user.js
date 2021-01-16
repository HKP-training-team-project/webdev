import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JWT from 'jsonwebtoken';
import UserItemListing from "./user-item-listing";
import "./main-user.css";

const BASE_URL = "https://hkp-training-teamprj.herokuapp.com";

const MainUser = () => {
    const [items, setItems] = useState([]);
    const [numItemsInCart, setNumItemsInCart] = useState(0);
    const token = localStorage.getItem('token');
    const userId = JWT.decode(token,'Put secret in .env!!!')._id;

    const getItems = () => {
        fetch(`${BASE_URL}/items`)
        .then(res => res.json())
        .then(data => {
            setItems(data.items);
        })
        .catch((err) => {
            console.error(err)
        })
    }

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
            var totalItems = 0;
            for(var i = 0; i < data.items.length; i++) {
                totalItems += data.items[i].quantity;
            }
            setNumItemsInCart(totalItems);
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
       getItems();
    }, []);

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div id="user-main-container">
            <div id="user-items-page-header">
                <h1 id="user-page-title">Products</h1>
                <Link to="/checkout" id="cart-link">
                    <i id="cart-icon" className="fa fa-shopping-cart" style={{fontSize: "48px"}}>
                        <span id="cart-count">{numItemsInCart}</span>
                    </i>
                </Link>
            </div>
            <div id="user-items-container">
            {
                items.map(item => {
                    return (
                        <UserItemListing key={item._id} 
                            id={item._id}
                            name={item.itemname} 
                            price={item.price} 
                            imgs={item.pictures} 
                            description={item.description} 
                        />
                    )
                })
            }
            </div>
        </div>
    )
}
export default MainUser;