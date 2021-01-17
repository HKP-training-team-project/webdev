import React from 'react'
import { useState, useEffect } from 'react';
import './edit-delete.css'
import AdminItemEdit from './admin-item-edit.js'
import {Link} from 'react-router-dom'

const EditDelete = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        };
        fetch('https://hkp-training-teamprj.herokuapp.com/items', requestOptions)
            .then(response => response.json())
            .then(data => setItems(data.items));
    }, [])
    
    const deleteItems = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}`}
        };
        fetch(`https://hkp-training-teamprj.herokuapp.com/items/${id}`, requestOptions)
            .then(response => response.text())
            
        setItems(items.filter(item => item._id !== id));
    }

    const tempItems = ([{"_id": "23k5j25", "itemname": "Mug", "price": "5", "description": "This is a Christmas mug!", "category": "Holiday", "pictures": ["https://rlv.zcache.com/cute_winking_rudolf_reindeer_christmas_coffee_coffee_mug-r7da940ffa7824507a60cb57fb7cc2904_kz9a2_704.jpg?rlvnet=1"]},
    {"_id": "wej2367", "itemname": "Ornament", "price": "10", "description": "This is a Christmas Ornament!", "category": "Holiday", "pictures": ["https://371266-1160757-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/MWA_GlassOrnaments_02.jpg"]},
    {"_id": "2tn3ho", "itemname": "Cookies", "price": "9", "description": "These are Christmas cookies!", "category": "Holiday", "pictures": ["https://www.momlovesbaking.com/wp-content/uploads/2018/11/Grandmas-Christmas-Cutout-Sugar-Cookies-SQ2.jpg"]}])
    const adminItems = items.map(item => <div><AdminItemEdit key = {item._id} 
                                                    id = {item._id} 
                                                    name = {item.itemname} 
                                                    price = {item.price}
                                                    description = {item.description}
                                                    category = {item.category}
                                                    pictures = {item.pictures}/>
                                            <div className = "adminItemEdit_buttons_delete">
                                                <button type="submit" onClick={() => deleteItems(item._id)}>Delete</button>
                                            </div></div>);
    return (
        <div className = "editDelete">
            <h1>Shopping</h1>
            <h2>Edit/Delete</h2>
            <Link to='/main-admin'>
                <button className="editDelete_button">Done</button>
            </Link>
            {adminItems}
        </div>
    )
}
export default EditDelete