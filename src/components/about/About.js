import React from 'react';
import "./About.css"
import { HiLightBulb } from "react-icons/hi"
import { GiLevelThreeAdvanced } from "react-icons/gi"
const About = () => {
    return (
        <div className='about_section'>
            <div className='about_container mx-auto d-flex justify-content-center align-items-center flex-column flex-md-row gap-3'>
                <div className="about_text">
                    <p className='fs-3 text-dark'>
                        AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST...
                        <br />
                        <span className='fw-bold fw-3'>– BENJAMIN FRANKLIN</span></p>
                    <div className='about_experience fs-3'>
                        <span className='fw-bold'>25</span>
                        <p> We have more than years of experience</p></div>
                </div>
                <div className='about_details'>
                    <div className='about_details_next d-flex flex-column flex-md-row'>
                        <img className='img-fluid' src="https://i.ibb.co/zJvDDjp/bank-about-1.png" alt="" />
                        <div className='d-flex justify-content-center align-items-center flex-column gap-2 py-5 about_detail p-3'>

                            <GiLevelThreeAdvanced />
                            <span className='fs-5 text-center text-white'>Our Team work for our management</span>
                        </div>
                    </div>
                    <div className='about_details_next d-flex flex-column flex-md-row'>
                        <img className='img-fluid order-1 order-md-2' src="https://i.ibb.co/SNYbbpq/circle2-1-1.png" alt="" />
                        <p className='d-flex justify-content-center align-items-center flex-column gap-3 py-5 about_detail order-2 order-md-1 p-3'>
                            <HiLightBulb />
                            <span className='fs-5 text-center text-white'>Our Expertise is Grown up with our Works</span>

                        </p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default About;