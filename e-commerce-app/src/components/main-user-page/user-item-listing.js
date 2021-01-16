import React from 'react';
import { Link } from 'react-router-dom';
import "./user-item-listing.css";

const BASE_URL = "https://hkp-training-teamprj.herokuapp.com";

const UserItemListing = (props) => {
  return (
    <div className="user-item-container">
      <Link to={{
            pathname: "/item", 
            state: {
              id: props.id,
              name: props.name,
              price: props.price,
              description: props.description,
              imgs: props.imgs
            }
          }} 
          className="user-item-link"
      >
      <h3 className="user-item-name">{props.name}</h3>
      <p className="user-item-price">${props.price}</p>
      <img src={`${BASE_URL}/${props.imgs[0]}`} alt={props.name} width="100px"/>
      <p className="user-item-description">{props.description}</p>
      </Link>
    </div>
  )
}
export default UserItemListing;