import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, img, description, id } = service
    const navigate = useNavigate()
    const handleServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} className="w-100" alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetails(id)} className='btn btn-primary'>book now -</button>
        </div>
    );
};

export default Service;