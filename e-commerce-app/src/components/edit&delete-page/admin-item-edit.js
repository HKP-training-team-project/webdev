import React from 'react'
import './edit-delete.css'
import {useDispatch} from 'react-redux'
const AdminItemEdit = (props) => {
    const pics = props.pictures.map(pic => <div className = "adminItemEdit_img"><img src = {pic}  /></div>);
    const dispatch = useDispatch()
    return (
        <div className = "adminItemEdit">
            {pics}
            <h3>{props.name}</h3>
            <p>${props.price}</p>
        </div>
    )
}
export default AdminItemEdit