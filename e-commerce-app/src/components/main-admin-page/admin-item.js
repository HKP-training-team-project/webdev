import React from 'react'
import './main-admin.css'

const AdminItem = (props) => {
    const pics = props.pictures.map(pic => <div className = "adminItem_img"><img src = {pic}  /></div>);
    return (
        <div className = "adminItem">
            {pics}
            <h3>{props.name}</h3>
            <p>${props.price}</p>
        </div>
    )
}
export default AdminItem