import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import Loans from '../components/Loans/Loans';
import Loanshero from '../components/loanshero/Loanshero';
import img1 from '../../src/utilities/images/hero-bank-1_optimized (1).png'
const Loan = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Apply Now" h3="Scroll to apply" img={img1}></Loanshero>
            </div>
            <div style={{ zIndex: "99", position: 'relative', background: "white", padding: "40px" }}>
                <Loans></Loans>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Loan;