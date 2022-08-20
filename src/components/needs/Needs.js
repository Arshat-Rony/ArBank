import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useLocation } from 'react-router-dom';
import "./Needs.css"

const needsData = [
    { id: 1, name: "No fees on select services and additional accounts" },
    { id: 2, name: "Earns interest See rates" },
    { id: 3, name: "Option to set up Balance Connect™ for overdraft protection" },
    { id: 4, name: "Paper checks available (no charge or discounted depending on check style)" },
    { id: 5, name: "Maintain a combined balance of $10,000 in eligible linked accounts Learn about combined balances" },
]


const Needs = () => {
    const location = useLocation()
    return (
        <div>
            <div className='needs d-flex justify-content-center align-items-center container flex-column flex-md-row gap-5'>
                <div className='mt-5 mt-md-0 order-2 order-md-1'>
                    <p className='text-uppercase text-secondary'>features & benefits</p>
                    <h2 className='mb-3'>
                        {location.pathname === '/mortgages' ? "When choosing a mortgage:" : "Create current accounts for all your needs"}
                    </h2>
                    {location.pathname === '/mortgages' && <p className='text-secondary'>To apply, you must hold a current account, savings account, credit card or mortgage with us, be a UK resident, aged 18+ and earning at least £10K per year.</p>}
                    {
                        needsData.map(need =>
                            <p>
                                <IoMdCheckmarkCircleOutline className='text-danger me-2 fs-4' /><span className='text-secondary'>
                                    {need.name}
                                </span>
                            </p>
                        )
                    }
                    {
                        location.pathname === "/account" && <p className='text-secondary'>Plus peace of mind that your money is safe and secure, with our 100% Security Guarantee.</p>
                    }
                </div>
                <div className='order-1 order-md-2 need_img'>
                    <div className='red'></div>
                    <div className="black"></div>
                    <img className='img-fluid  ' src={`${location.pathname === "/mortgages" ? "https://i.ibb.co/dpd8fC7/family-520x600-1.png" : "https://i.ibb.co/wg3kV7H/account-resized.png"}`} alt="" />
                </div>
            </div>

            <div className='needs d-flex justify-content-center align-items-center container flex-column flex-md-row gap-5'>
                <img src="https://i.ibb.co/vcTd533/card-resized.png" alt="" />
                <div>
                    <p className='text-uppercase text-secondary'>how to apply</p>
                    <h2>{location.pathname === "/mortgages" ? "Get real insights about the first-time home-buying experience" : "What do you need to open a current account?"}</h2>
                    <p className='text-secondary'>Our eligibility checker allows you to find out whether you'll be accepted before you apply with us. It takes around 2 minutes and it won't harm your credit rating.</p>

                    <button className="btn btn-danger btn-lg rounded-0">{
                        location.pathname === "/mortgages" ? "First-time Home buyer guide" : "See if you're eligible"
                    }</button>
                </div>
            </div>
        </div>
    );
};

export default Needs;