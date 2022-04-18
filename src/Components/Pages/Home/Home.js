import React from 'react';
import banner from '../../images/banner.png'
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='container mt-4'>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-12">
                    <h1 className='home-title text-primary '>Building <br />
                        <span className='fw-bold text-danger ds-1'>Great Smiles</span>
                    </h1>
                    <p className='para py-2'>We are specialists in both pediatric dentistry and orthodontics, enabling us to care for your child’s smile at every stage of their growth and development.</p>
                    <button className='btn btn-primary'>Request Appoinment</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={banner} alt="" />
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;