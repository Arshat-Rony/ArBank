import React from 'react';
import { FiArrowRightCircle } from "react-icons/fi"
import { Link } from 'react-router-dom';
import "./Personalloan.css"


const personalLoans = [
    { id: 1, name: "Fixed-rate Loans", interest: "No interest rate surprises", text: "A “fixed-rate” mortgage comes with an interest rate that won’t change for the life of your home loan. A “conventional” (conforming) mortgage is a loan that conforms to established guidelines for the size of the loan and your financial situation.", maintenance: " 3.25%", apr: "3.000%" },
    { id: 2, name: "FHA Loans", interest: "Lower credit score requirements", text: "A Federal Housing Administration (FHA) loan is a government-backed home mortgage loan with more flexible lending requirements than conventional loans. Because of this, FHA mortgage interest rates may be higher. The buyer will also have to pay monthly mortgage.", maintenance: "3.625%", apr: "3.319%" },
    { id: 3, name: "VA Loans", interest: "No down payment option", text: "VA loans are home mortgages backed by the Department of Veterans Affairs (VA). With a VA loan, eligible service members and veterans can buy a home with little or no down payment, or refinance an existing home to get cash out or a lower monthly payment.", maintenance: "3.375%", apr: "3.629%" },

]

const Personalloan = () => {
    return (
        <div className='mt-5'>
            <p className='text-secondary text-uppercase text-center'>fees & rates</p>
            <h2 className='text-center'>Compare Options</h2>
            <p className='text-secondary text-center'>Your mortgages should be as unique as the home you buy</p>
            <div className='p-4 container d-flex justify-content-start align-items-start flex-column flex-md-row gap-3 mt-5'>
                {
                    personalLoans.map(account =>
                        <div className='account_type personal_loan border rounded-1 mt-5 mt-md-0 ' key={account.id}>
                            <div className='account_type_text p-4'>
                                <div className=' mb-4'>
                                    <h4>{account.name}</h4>
                                    <p className='text-secondary mb-5'>{account.interest}</p>
                                    <p className='text-secondary mt-4'>{account.text}</p>
                                </div>

                                <div className='d-flex justify-content-start align-items-start gap-5 mt-5'>
                                    <div>
                                        <p className='text-danger fs-5'>{account.maintenance ? account.maintenance : 0}</p>
                                        <p className=''>Rate</p>
                                    </div>
                                    <div>
                                        <p className='text-danger fs-5'>{account.apr}</p>
                                        <p className=''>APR</p>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-start ps-4 align-items-start gap-5 account_type_btns'>
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

export default Personalloan;