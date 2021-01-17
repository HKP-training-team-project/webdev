import React from 'react'
import './edit-delete.css'
import '../create-page/create.css'
import {useState} from 'react';

const AdminItemEdit = (props) => {
    const [pic, addPics] = useState(null);
    const [picFile, addPicFile] = useState(null);
    
    const fileHandler = event => {
        addPics(URL.createObjectURL(event.target.files[0]));
        addPicFile(event.target.files[0])
    }

    const handleSubmit = event => {
        event.preventDefault();
        var fd = new FormData();
        if (picFile != null) {
            fd.append("pictures", picFile);
        } else {
            fd.append("pictures", props.pictures[0]);
        }
        fd.append("itemname", event.target[0].value);
        fd.append("price", event.target[1].value);
        fd.append("category", event.target[3].value);
        fd.append("description", event.target[2].value);
        const requestOptions = {
            method: 'PUT',
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`},
            body: fd
        };
        fetch(`https://hkp-training-teamprj.herokuapp.com/items/${props.id}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.message));
    }
    
    return (
        <div className = "adminItemEdit">
            <div className = "adminItemEdit_container">
                <div className = "adminItemEdit_image-picker">
                    <div className = "adminItemEdit_box">
                        {pic != null ? <img src = {pic}/> : <img src = {`https://hkp-training-teamprj.herokuapp.com/${props.pictures[0]}`} />}
                    </div>
                    <input type = "file" accept="image/*" onChange = {fileHandler}/>
                </div>
                <div className = "adminItemEdit_inputs">
                    <form className = "adminItemEdit_form" enctype="multipart/form-data" onSubmit = {handleSubmit}>
                        <label for = "name">Name</label>
                        <input type = "text" name = "name" defaultValue = {props.name} required/>
                        <label for = "price">Price</label>
                        <input type = "number" name = "price" step = "0.25" min="0" defaultValue = {props.price} required />
                        <label for = "description">Description</label>
                        <textarea name = "description" rows="5" defaultValue = {props.description} required ></textarea>
                        <label for = "category">Category</label>
                        <input type = "text" name = "category" defaultValue = {props.category} required />
                        <button type="submit" className = "adminItemEdit_buttons">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminItemEdit