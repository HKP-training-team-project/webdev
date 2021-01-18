import React, { useEffect } from 'react'
import './main-admin.css'

const AdminItem = (props) => {
    let display = true;
    const pics = props.pictures.map(pic => <div className = "adminItem_img"><img src = {`https://hkp-training-teamprj.herokuapp.com/${pic}`}  /></div>);
    useEffect( async () => {
        let response = await fetch(`https://hkp-training-teamprj.herokuapp.com/${props.pictures[0]}`)
        if(response.status === 404) {
            display = false;
        }
    },[])
    return (
        <div className = "adminItem">
            <div className = "adminItem_img">
                {display && props.pictures[0] ? <img src = {`https://hkp-training-teamprj.herokuapp.com/${props.pictures[0]}`}  /> : ''}
            </div>
            <h3>{props.name}</h3>
            <p>${props.price}</p>
        </div>
    )
}
export default AdminItem