import React from 'react';

import { BsCheckCircleFill } from 'react-icons/bs'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import "./Account.css"
const accounts = [
    { id: 1, name: "Smart Checking Account", text: "Simple checking account with no monthly maintenance fee", requirement: ["No monthly maintenance fee, no minimum balance", "Paper checks and every digital feature"], maintenance: '' },
    { id: 2, name: "Advantage Checking Account", text: "A bank account minus the checks with no overdraft fees", requirement: ["Interest bearing", "Discounts on checks", "Waivable Monthly Maintenance Fee", "No Fee ATMs"], maintenance: 5 },
    { id: 3, name: "Privilege Checking Account", text: "Top-tier checking with competitive rates and all the perks", requirement: ["Relationship rates and discounts", "Automatic daily sweeps to savings", "Premium management and investing services", "Financial management and our best standard rate"], maintenance: 10 },

]

const Account = () => {
    return (
        <div >
            <p className='text-secondary text-center'>Open Your checking account</p>
            <h2 className='text-center'>Compare Accounts</h2>
            <p className='text-secondary text-center'>The bank account that provides flexible access with more ways to bank</p>
            <div className='p-4 container d-flex justify-content-start align-items-start flex-column flex-md-row gap-3'>
                {
                    accounts.map(account =>
                        <div className='account_type border rounded-1 mt-5 mt-md-0 ' key={account.id}>
                            <div className='account_type_text p-4'>
                                <div className=' mb-4'>
                                    <h4>{account.name}</h4>
                                    <p className='text-secondary'>{account.text}</p>
                                </div>
                                {
                                    account.requirement.map((r, index) =>
                                        <p key={index}> <BsCheckCircleFill className="me-2 text-danger" /> <span className='text-secondary'>{r}</span></p>
                                    )
                                }

                                <div className='d-flex justify-content-start align-items-start gap-5 mt-5'>
                                    <div>
                                        <p className='text-danger fs-3'>$ {account.maintenance ? account.maintenance : 0}</p>
                                        <p className=''>Maintenance Fee</p>
                                    </div>
                                    <div>
                                        <p className='text-danger fs-3'>{account.maintenance ? "Yes" : "No"}</p>
                                        <p className=''>Interest Bearing</p>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center align-items-start ps-4 gap-5 account_type_btns'>
                                <button className="btn btn-outline-danger">Learn More <FiArrowRightCircle /></button>
                                <button className="btn btn-danger">
                                    <Link className='text-decoration-none text-white' to="/apply">Apply Now</Link>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Account;