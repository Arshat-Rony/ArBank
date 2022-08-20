import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';
import Reach from '../components/reach/Reach';

const Apply = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Reach Us" h3="Reach Us In a Different Way" img="https://i.ibb.co/m59kFtX/hero-girl-resized-1.png"></Loanshero>
            </div>
            <div style={{ zIndex: "99", position: 'relative', background: "white" }}>
                <Reach></Reach>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Apply;