import React from 'react'
import './create.css'
import {useState} from 'react';

const Create = () => {
    const [pic, addPics] = useState(null);
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");


    const fileHandler = event => {
        addPics(URL.createObjectURL(event.target.files[0]));
    }

    const handleSubmit = event => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ${token}'},
            body: JSON.stringify({ name, price, description, category, pic})
        };
        fetch('${link}/items', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.message));
    }
    return (
        <div className = "create">
            <h1>Shopping</h1>
            <h2>Add An Item</h2>
            <div className = "create_container">
                <div className = "create_image-picker">
                    <div className = "create_box">
                        {pic != null ? <img src = {pic}/> : <p>Choose an image</p>}
                    </div>
                    <input type = "file" accept="image/*" onChange = {fileHandler}/>
                </div>
                <div className = "create_inputs">
                    <form className = "create_form" onSubmit = {handleSubmit}>
                        <label for = "name">Name</label>
                        <input type = "text" name = "name" value = {name} required onChange = {(event) => setName(event.target.value)}/>
                        <label for = "price">Price</label>
                        <input type = "number" name = "price" step = "0.25" min="0" value = {price} required onChange = {(event) => setPrice(event.target.value)} />
                        <label for = "description">Description</label>
                        <textarea name = "description" rows="5" value = {description} required onChange = {(event) => setDescription(event.target.value)}></textarea>
                        <label for = "category">Category</label>
                        <input type = "text" name = "category" value = {category} required onChange = {(event) => setCategory(event.target.value)} />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create