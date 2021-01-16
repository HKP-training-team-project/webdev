import React from 'react'
import './main-admin.css'

const AdminItem = (props) => {
    const pics = props.pictures.map(pic => <div className = "adminItem_img"><img src = {`https://hkp-training-teamprj.herokuapp.com/${pic}`}  /></div>);
    return (
        <div className = "adminItem">
            <div className = "adminItem_img">
                <img src = {`https://hkp-training-teamprj.herokuapp.com/${props.pictures[0]}`}  />
            </div>
            <h3>{props.name}</h3>
            <p>${props.price}</p>
        </div>
    )
}
export default AdminItem