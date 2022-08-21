import React from 'react';
import { GiFishCorpse } from 'react-icons/gi'
import { TbBusinessplan } from 'react-icons/tb'
import { GiHouse } from 'react-icons/gi'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { GiTakeMyMoney } from 'react-icons/gi'
import "./Services.css"
import { Link } from 'react-router-dom';
import { BiLogInCircle } from "react-icons/bi"

const servicesData = [
    { id: 1, name: "Agricultural Loan" },
    { id: 2, name: "Business Loan" },
    { id: 3, name: "House Loan" },
    { id: 4, name: "Personal Loan" },
    { id: 5, name: "Education Loan" },
    { id: 6, name: "Payday Loan" },
]
const Services = () => {
    return (
        <div className="services_container container text-center">
            <p className='text-danger text-uppercase'>Knowledge of the Market</p>
            <h2 className='my-3'>Only the best professional services</h2>
            <small className='lead text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sequi nam aperiam soluta magni numquam.</small>

            <div className='row row-cols-1 row-cols-md-3 services_text_container mx-auto gx-2'>
                {
                    servicesData.map((service, index) =>
                        <div key={service.id} className="text-center mt-5 d-flex flex-column justify-content-center align-items-center services_text mx-auto p-3">
                            <div className="float"></div>
                            <span className="services_icon">{index === 0 && <GiFishCorpse />}</span>
                            <span className="services_icon">{index === 1 && <TbBusinessplan />}</span>
                            <span className="services_icon">{index === 2 && <GiHouse />}</span>
                            <span className="services_icon">{index === 3 && <GiReceiveMoney />}</span>
                            <span className="services_icon">{index === 4 && <MdOutlineCastForEducation />}</span>
                            <span className="services_icon">{index === 5 && <GiTakeMyMoney />}</span>
                            <span className="services_icon">{index === 6 && <GiFishCorpse />}</span>
                            <h4>{service.name}</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, unde sunt quasi incidunt nulla consectetur.</p>
                            <Link to="/allloan" className='text-danger text-decoration-none'> Learn More <BiLogInCircle className='text-secondary ms-2' /></Link>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Services;