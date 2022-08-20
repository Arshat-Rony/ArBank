import React from 'react';
import { GiNotebook } from "react-icons/gi"
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { FaCcMastercard, FaGgCircle } from 'react-icons/fa'

const startingData = [
    { id: 1, name: "Fill the form" },
    { id: 2, name: "Get Pre-Qualified" },
    { id: 3, name: "Verify your ID" },
    { id: 4, name: "Enjoy Your Banking" },
]

const Prepare = () => {
    return (
        <div className='pt-5'>
            <p className='text-secondary text-uppercase text-center'>open your checking account</p>
            <h2 className='text-center'>How to get Started</h2>
            <p className='text-secondary text-center'>The bank account that provides flexible access with more ways to bank</p>
            <div className='d-flex justify-content-center align-items-center flex-column flex-md-row container gap-5 mb-5'>
                {
                    startingData.map((data, index) =>
                        <div key={data.id} className="mt-5 text-center ">
                            {index === 0 && <GiNotebook className='fs-1 text-danger' />}
                            {index === 1 && <BsFillCreditCard2FrontFill className='fs-1 text-danger' />}
                            {index === 2 && <FaCcMastercard className='fs-1 text-danger' />}
                            {index === 3 && <FaGgCircle className='fs-1 text-danger' />}
                            <p className='mt-2'>{index + 1}. {data.name}</p>
                            <p className='text-secondary'>Ea aliquam dolore et voluptate iste porro eius. Libero eius eos aliquam?</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Prepare;