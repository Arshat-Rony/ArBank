import React from 'react';
import Finance from '../components/finance/Finance';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';
import Service from '../components/service/Service';
import { HiOutlineLightBulb } from 'react-icons/hi'
import { Link } from 'react-router-dom';


const Allservices = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Services" h3="Scroll to Explore" img="https://i.ibb.co/HLcVwRt/service-hero-resized-1.png"></Loanshero>
            </div>

            <div style={{ zIndex: "99", position: 'relative', background: "white", padding: "40px" }}>
                <Service></Service>
                <Finance></Finance>
            </div>
            <div className='bg-danger p-5 d-flex justify-content-center align-items-center flex-column '>
                <span style={{ fontSize: "50px" }} className='mb-3 text-white'><HiOutlineLightBulb /></span>
                <h2 className='text-center text-white'>Which is right for you ?</h2>
                <p className='text-center text-white'>Whatever goal you'd like ot achieve, we're here to help you determine which loan option is right for you</p>
                <Link className='text-black' to="/apply"> <button className="btn bg-white rounded-0 mt-3 btn-lg">Help Me to Decide</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Allservices;