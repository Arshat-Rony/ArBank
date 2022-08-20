import React from 'react';
import Account from '../components/Account/Account';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';
import img from "../../src/utilities/images/hero-resized-1 (1).png"
import Prepare from '../components/Accountprepare/Prepare';
import Needs from '../components/needs/Needs';

const Accounts = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Accounts Open" h3="Open Your Account Now" img={img}></Loanshero>
            </div>
            <div style={{ background: "white" }}>
                <Prepare></Prepare>
                <Needs></Needs>
                <Account></Account>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Accounts;