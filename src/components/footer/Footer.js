import React from 'react';
import Primarybtn from '../Primaybtn/Primarybtn';
import { SiStarlingbank } from "react-icons/si"
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from "react-icons/fa"
import { CgInstagram } from "react-icons/cg"
import { GoLocation } from "react-icons/go"
import { BiPhoneCall } from "react-icons/bi"
import { MdMarkEmailRead } from 'react-icons/md'
import "./Footer.css"
import { Link } from 'react-router-dom';

const links = [
    { id: 1, name: "About" },
    { id: 2, name: "Our Performance" },
    { id: 1, name: "Help(FAQ)" },
    { id: 1, name: "Blog" },
    { id: 1, name: "Contact" },
]
const resources = [
    { id: 1, name: "Support" },
    { id: 2, name: "Privacy Policy" },
    { id: 3, name: "Terms of Service" },
    { id: 4, name: "Business Loan" },
    { id: 5, name: "Loan Service" },
]
const date = new Date()

const Footer = () => {
    return (
        <div className='footer pt-5'>
            <div className='container '>
                <div className='account d-flex justify-content-center justify-content-md-between align-items-center flex-column flex-md-row'>
                    <h4>Open an account now and enjoy <br /> all the benefits of modern banking</h4>
                    <Link className='text-decoration-none' to="/apply"><Primarybtn text="Open Account"></Primarybtn></Link>
                </div>
                <hr className='mb-5 mt-5' />

                <div className='footer_contents d-flex justify-content-center justify-content-md-start align-items-center flex-column flex-md-row pt-5'>
                    <div className='text-center text-md-start'>
                        <p className='d-flex justify-content-center justify-content-md-start align-items-center mb-5'>
                            <img src="https://i.ibb.co/8j53qPn/bank-logo-1-removebg-preview.png" width="50px" alt="" />
                            <span className='fs-3 fw-bold'> ArBank</span>
                        </p>
                        <p className='text-secondary'>We are a bank. A fully-fledged, bona fide bank. A business bank created and backed by business people.</p>

                        <span className='me-3'>Follow us on : -</span>
                        <span className=''><ImFacebook /></span>
                        <span className=' me-2'> <FaLinkedinIn /></span>
                        <span className=''><CgInstagram /></span>
                    </div>

                    <div className='mt-5 mt-md-0 text-center text-md-start'>
                        <h5 className='footer_lead'>Quick Links</h5>
                        {
                            links.map(link =>
                                <p key={link.id}><small>{link.name}</small></p>
                            )
                        }
                    </div>
                    <div className='mt-5 mt-md-0 text-center text-md-start'>
                        <h5 className='footer_lead'>Other Resources</h5>
                        {
                            resources.map(resource =>
                                <p key={resource.id}><small>{resource.name}</small></p>
                            )
                        }
                    </div>
                    <div className='mt-5 mt-md-0 text-center text-md-start mb-md-4'>
                        <h5 className='footer_lead mb-5 footer_lead_foot'>Contact Us</h5>
                        <p className='d-flex justify-content-center justify-content-md-start align-items-center gap-2'><span><GoLocation /></span> 6890 Blvd, The Bronx, NY 1058 New York, USA</p>
                        <p className='d-flex justify-content-center justify-content-md-start align-items-center gap-2'><span><MdMarkEmailRead /></span> arbank@gmail.com</p>
                        <p className='d-flex justify-content-center justify-content-md-start align-items-center gap-2'><span><BiPhoneCall /> +38764848</span></p>
                    </div>
                </div>
            </div>

            <hr className='mt-5 pt-5' />
            <p className='text-whtie text-center pb-3'>{'\u00a9'} All Items are reserved by ARBank {date.getFullYear()}</p>
        </div>
    );
};

export default Footer;