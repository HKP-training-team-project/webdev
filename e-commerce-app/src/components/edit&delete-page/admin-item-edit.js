import React from 'react'
import './edit-delete.css'
import '../create-page/create.css'
import {useState} from 'react';

const AdminItemEdit = (props) => {
    const [pic, addPics] = useState(null);
    
    const fileHandler = event => {
        addPics(URL.createObjectURL(event.target.files[0]));
    }
    
    return (
        <div className = "adminItemEdit">
            <div className = "create_container">
                <div className = "create_image-picker">
                    <div className = "create_box">
                        {pic != null ? <img src = {pic}/> : <img src = {props.pictures[0]}/>}
                    </div>
                    <input type = "file" accept="image/*" onChange = {fileHandler}/>
                </div>
                <div className = "create_inputs">
                    <form className = "create_form">
                        <label for = "name">Name</label>
                        <input type = "text" name = "name" defaultValue = {props.name} required/>
                        <label for = "price">Price</label>
                        <input type = "number" name = "price" step = "0.25" min="0" defaultValue = {props.price} required />
                        <label for = "description">Description</label>
                        <textarea name = "description" rows="5" defaultValue = {props.description} required ></textarea>
                        <label for = "category">Category</label>
                        <input type = "text" name = "category" defaultValue = {props.category} required />
                        <div className = "adminItemEdit_buttons">
                            <button type="submit">Save</button>
                            <div className = "adminItemEdit_buttons_delete">
                                <button type="submit">Delete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminItemEdit