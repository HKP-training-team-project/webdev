import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import './create.css'
import {useState} from 'react';

const Create = () => {
    const [pic, addPics] = useState(null);
    const [picFile, addPicFile] = useState(null);
    const [isAdded, setIsAdded] = useState(false);


    const fileHandler = event => {
        addPics(URL.createObjectURL(event.target.files[0]));
        addPicFile(event.target.files[0])
    }

    const handleSubmit = event => {
        event.preventDefault();
        var fd = new FormData();
        if (picFile != null) {
            fd.append("pictures", picFile);
        }
        fd.append("itemname", event.target[0].value);
        fd.append("price", event.target[1].value);
        fd.append("category", event.target[3].value);
        fd.append("description", event.target[2].value);
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`},
            body: fd
        };
        fetch('https://hkp-training-teamprj.herokuapp.com/items', requestOptions)
            .then(response => response.json())
            .then(data => {console.log(data.message)
                           setIsAdded(true)})
            .catch(err => console.log("Error reading data" + err));
    }
    return (
        <div className = "create">
            <h1>Shopping</h1>
            <Link to='/main-admin'>
                <button className="create_button">Cancel</button>
            </Link>
            <h2>Add An Item</h2>
            <div className = "create_container">
            <div className = "create_image-picker d-flex flex-column align-items-center">
                <div className = "create_box">
                    {pic != null ? <img src = {pic}/> : <p>Choose an image</p>}
                </div>
                    <input class="w-75" type = "file" accept="image/*" onChange = {fileHandler}/>
            </div>
                <div className = "create_inputs">
                    <form className = "create_form" enctype="multipart/form-data" onSubmit = {handleSubmit}>
                        <label for = "name">Name</label>
                        <input type = "text" name = "name" required/>
                        <label for = "price">Price</label>
                        <input type = "number" name = "price" step = "0.25" min="0" required />
                        <label for = "description">Description</label>
                        <textarea name = "description" rows="5" required></textarea>
                        <label for = "category">Category</label>
                        <input type = "text" name = "category" required />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
            {isAdded ? <Redirect to='/main-admin'></Redirect>: ''}
        </div>
    )
}
export default Create