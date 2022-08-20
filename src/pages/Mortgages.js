import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';
import Needs from '../components/needs/Needs';
import Personalloan from '../components/personalloan/Personalloan';
import Questions from '../components/Questions/Questions';
import Way from '../components/Way/Way';

const Mortgages = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Mortgages" h3="Quick Apply" img="https://i.ibb.co/ZSBhJyr/money-resized-new-1.png"></Loanshero>
            </div>
            <div style={{ zIndex: "99", position: 'relative', background: "white", padding: "40px" }}>
                <Way></Way>
                <Needs></Needs>
                <Personalloan></Personalloan>
                <Questions></Questions>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mortgages;