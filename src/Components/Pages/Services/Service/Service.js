import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description, id } = service
    return (
        <div className='service'>
            <img src={img} className="w-100" alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>book now -</button>
        </div>
    );
};

export default Service;