import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JWT from 'jsonwebtoken';
import UserItemListing from "./user-item-listing";
import "./main-user.css";

const BASE_URL = "https://hkp-training-teamprj.herokuapp.com";

const MainUser = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(null)
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
    let categories = items.map(item => item.category.trim().toLowerCase()) 
    let categoriesSet = new Set(categories)
    categories = [...categoriesSet]
    let itemsList = [];
    if(filter) {
        for(let i of items) {
            if(i.category.trim().toLowerCase() === filter){
                itemsList.push(<UserItemListing key={i._id} 
                    id={i._id}
                    name={i.itemname} 
                    price={i.price} 
                    imgs={i.pictures} 
                    description={i.description} 
                />)
            }
        }
    }
    else{
        itemsList = items.map(item => {
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
    return (
        <div id="user-main-container" className="container-fluid px-3">
            <div id="user-items-page-header" className="d-flex justify-content-between ">
                <h1 id="user-page-title" >Shopping</h1>
                <Link to="/checkout" id="cart-link">
                    <i id="cart-icon" className="fa fa-shopping-cart" style={{fontSize: "48px"}}>
                        <span id="cart-count">{numItemsInCart}</span>
                    </i>
                </Link>
            </div>
            <div className="container-fluid form-group d-flex flex-column align-items-center w-50" id="main-user-filter">
                <h1>Filter Items</h1>
                <select className="form-control" onChange=
                    {
                        (e) => {
                            e.preventDefault()
                            if(e.target.value === 'select') {
                                setFilter(null) 
                            }
                            else {
                                setFilter(e.target.value)
                            }
                        }
                    }
                >
                    <option value="select">All Items</option>
                    {categories.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
            <div id="user-items-container" className="">
            {itemsList}
            </div>
        </div>
    )
}
export default MainUser;