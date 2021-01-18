import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import './main-admin.css'
import AdminItem from './admin-item.js'
import {useSelector, useDispatch} from 'react-redux'

const MainAdmin = () => {
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()
    const [items, setItems] = useState([]);
    
    const logout = () => {
        dispatch({type: 'LOGOUT'});
    }

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        };
        fetch('https://hkp-training-teamprj.herokuapp.com/items', requestOptions)
            .then(response => response.json())
            .then(data => setItems(data.items));
    }, [])
    
    const adminItems = items.map(item => <AdminItem key = {item._id} 
                                                    name = {item.itemname} 
                                                    price = {item.price}
                                                    description = {item.description}
                                                    category = {item.category}
                                                    pictures = {item.pictures}/>);

    return (
        <div className = "mainAdmin">
            <Link to="/">
                <button id = "logout-button-admin" onClick = {logout}>Logout</button>
            </Link>
            <h1>Shopping</h1>
            <h2>Your Items</h2>
            <div className = "mainAdmin_buttons">
                <Link to='/edit-delete'>
                    <button className="mainAdmin_button">Edit</button>
                </Link>
                <Link to='/create'>
                    <button className="mainAdmin_button">Add</button>
                </Link>
            </div>
            <div className = "mainAdmin_items">{adminItems}</div>
            
        </div>
    )
}
export default MainAdmin