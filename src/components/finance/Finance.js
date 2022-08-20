import React from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { BsBank2 } from "react-icons/bs"
import { GiBank, GiNotebook } from "react-icons/gi"
import { RiBankCard2Fill } from "react-icons/ri"
import { FiArrowRightCircle } from 'react-icons/fi'
import "./Finance.css"
import { Link } from 'react-router-dom';

const financeData = [
    { id: 1, name: "Banking", link: "/banking" },
    { id: 2, name: "Checking", link: "/account" },
    { id: 3, name: "Payment Cards", link: "/banking" },
    { id: 4, name: "Savings", link: "/account" },
    { id: 4, name: "Mortgages", link: "/mortgages" },
]


const Finance = () => {
    return (
        <div className='container finance_container'>
            <p className='text-uppercase text-danger text-center'>Banking at its finest</p>
            <h2 className='text-center'>Choose What's right for you</h2>
            <p className='text-secondary text-center'>We help business and customers achieve more</p>
            <div className='finance_text_container row row-cols-1  row-cols-lg-5 gy-5 gy-lg-0'>
                {
                    financeData.map((finance, index) =>
                        <div className='finance_text text-center py-4 px-3' key={index}>
                            {index === 0 && <GiBank className='finance_icon' />}
                            {index === 1 && <BsBank2 className='finance_icon' />}
                            {index === 2 && <FaRegMoneyBillAlt className='finance_icon' />}
                            {index === 3 && <RiBankCard2Fill className='finance_icon' />}
                            {index === 4 && <GiNotebook className='finance_icon' />}
                            <p>
                                <Link to={finance.link} className='link text-decoration-none'>
                                    {finance.name} <FiArrowRightCircle className='fs-5 text-secondary ms-2' />
                                </Link>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Finance;