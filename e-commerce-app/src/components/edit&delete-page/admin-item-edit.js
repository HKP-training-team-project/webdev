import React from 'react'
import './edit-delete.css'

const AdminItemEdit = (props) => {
    const pics = props.pictures.map(pic => <div className = "adminItemEdit_img"><img src = {pic}  /></div>);
    return (
        <div className = "adminItemEdit">
            {pics}
            <h3>{props.name}</h3>
            <p>${props.price}</p>
        </div>
    )
}
export default AdminItemEdit