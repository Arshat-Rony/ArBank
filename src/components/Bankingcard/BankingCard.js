import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi"
import { BsCheckCircleFill } from "react-icons/bs"
import "./BankingCard.css"

const requirement = ["Earn unlimited 1.5% cash back on all purchases.", "No limit to the amount of cash back you can earn and cash rewards don’t expire. Calculate rewards", "Introductory 0%† APR for your first 15 billing cycles for purchases, and for any balance transfers made within 60 days of opening your account. After that, a Variable APR that's currently 13.99% to 23.99% will apply. 3% fee (min $10) applies to balance transfers.", "Preferred Rewards members earn 25%-75% more cash back on every purchase. That means you could earn up to 2.62% cash back on every purchase. Learn More About Preferred Rewards", "This online only offer may not be available if you leave this page, if you visit a Bank of America financial center or call the bank. You can take advantage of this offer when you apply now."]


const accounts = [
    { id: 1, name: "ArBank Basic Card", requirement: requirement, maintenance: 0, img: 'https://i.ibb.co/px9D937/bank-card-visa-473x297-jpg-resized-1.png' },
    { id: 2, name: "ArBank  Signature Card", requirement: requirement, maintenance: 25, img: 'https://i.ibb.co/syqrQyt/normal-card-1.png' },
    { id: 3, name: "Privilege Checking Account", requirement: requirement, maintenance: 35, img: 'https://i.ibb.co/6b2JVcK/card-platinum-473x297-1-removebg-preview.png' },

]




const BankingCard = () => {
    return (
        <div className='container '>
            {
                accounts.map((data, index) =>

                    <div key={data.id} className={`banking_card d-flex justify-content-start align-items-start justify-content-md-center flex-column flex-md-row ${index === 0 ? "mt-5" : "banking_card_margin"}`}>

                        <div className='d-flex justify-content-start align-items-start justify-content-md-center align-items-md-center flex-column'>
                            <img className='img-fluid rounded-3' src={data.img} alt="" />
                            <div className='d-flex justify-content-start align-items-start flex-column flex-md-row gap-5 mt-5'>
                                <div className='banking_card_feature'>
                                    <p className='text-danger fs-5'>$ {data?.maintenance}</p>
                                    <p className='text-secondary'>Maintenance Fee</p>
                                </div>
                                <div className='banking_card_feature'>
                                    <p className='text-danger fs-5'>{data.maintenance ? "Yes" : "No"}</p>
                                    <p className='text-secondary'>Interest Bearing</p>
                                </div>
                                <div className='banking_card_feature'>
                                    <p className='text-danger fs-5'>Yes</p>
                                    <p className='text-secondary'>Temporary Lock</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 mt-md-0'>
                            <h4>{data.name}</h4>
                            <p className='text-secondary'>$200 online cash rewards bonus offer and 3% cash back in the category of your choice.</p>
                            {
                                data.requirement.map((r, index) =>
                                    <p key={index}> <BsCheckCircleFill className="me-2 text-danger" /> <small className='text-secondary'>{r}</small></p>
                                )
                            }
                            <div className='d-flex justify-content-start align-items-start gap-3 mt-5'>
                                <button className="btn btn-outline-danger btn-lg">Learn More <FiArrowRightCircle /></button>
                                <button className="btn btn-danger btn-lg">
                                    <Link className='text-decoration-none text-white' to="/apply">Apply Now</Link>
                                </button>
                            </div>
                        </div>


                    </div>


                )
            }
        </div>
    );
};

export default BankingCard;