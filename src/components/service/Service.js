import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi'

import "./Service.css"

const servicesData = [
    { id: 1, name: "Agricultural Loan", img: "https://i.ibb.co/hmPN8Bd/loan-1-resized.png" },
    { id: 2, name: "Business Loan", img: "https://i.ibb.co/2SPk3zr/loan-2-resized.png" },
    { id: 3, name: "House Loan", img: "https://i.ibb.co/GtYG0G7/loan-3-resized.png" },
    { id: 4, name: "Personal Loan", img: "https://i.ibb.co/ZxxQb8Y/loan-4-resized.png" },
    { id: 5, name: "Education Loan", img: " https://i.ibb.co/2cLJjXV/loan-5-resized.png" },
    { id: 6, name: "Payday Loan", img: "https://i.ibb.co/7nLq5xL/loan-6-resized.png" },
]
const Service = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-danger text-uppercase'>Knowledge of the Market</p>
                <h2 className='my-3'>Only the best professional services</h2>
                <small className='lead text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sequi nam aperiam soluta magni numquam.</small>
            </div>
            <div className='container row row-cols-1 row-cols-md-3 mx-auto gap-3'>
                {
                    servicesData.map(service =>
                        <div key={service.id} className="py-4 mt-5 service rounded-3">
                            <h6 className='text-danger ps-3 mb-2'>{service.name}</h6>
                            <img className='img-fluid' src={service.img} alt="" />
                            <Link className='d-flex justify-content-between align-items-center px-3 mt-4 text-decoration-none' to="/account">View Details <FiArrowRightCircle /></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Service;