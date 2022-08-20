import React from 'react';
import { VscDebugBreakpointUnsupported } from "react-icons/vsc"
import Primarybtn from '../Primaybtn/Primarybtn';
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from "react-icons/fa"
import { CgInstagram } from "react-icons/cg"
import "./Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero d-flex justify-content-center justify-content-md-between align-items-start align-items-md-center flex-column flex-md-row'>
            <div style={{ zIndex: "1" }} className=' ms-4 ms-md-5 text-white'>
                <p className='ms-md-5'><small>We are here for</small></p>
                <h1 style={{ zIndex: '1', fontSize: '40px' }} className='text-white fw-bold mt-3 ms-md-5'>Welcome to Secured <br /> Money Places</h1>
                <p className='ms-md-5'>Loans are advanteageous as a relatively inexpernsive way of borrowing monety. <br />
                    Wr believe in those made to do more.</p>
                <div className='d-flex justify-content-start align-items-start ms-md-5'>
                    <div className="animation">
                        < VscDebugBreakpointUnsupported className='point' />
                    </div>
                </div>
                <div className='text-center mt-5 ms-md-5' style={{ width: "200px" }}>
                    <Link to="/loan" className="text-decoration-none">
                        <Primarybtn text="Apply Now"></Primarybtn>
                    </Link>
                </div>

            </div>
            <div style={{ zIndex: "1" }} className='hero_icons text-white d-none d-md-block'>
                <span className='me-3'>Follow us on ╾╾</span>
                <span className=''><ImFacebook /></span>
                <span className=' me-2'> <FaLinkedinIn /></span>
                <span className=''><CgInstagram /></span>
            </div>
        </div >
    );
};

export default Hero;