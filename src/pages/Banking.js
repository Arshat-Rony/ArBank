import React from 'react';
import BankingCard from '../components/Bankingcard/BankingCard';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';



const Banking = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Banking Now" h3="Sstart Banking with ARBank" img="https://i.ibb.co/qDwWWSC/mobile-banking-1520x700-1.png"></Loanshero>
            </div>
            <div style={{ zIndex: "99", position: 'relative', background: "white", padding: "40px" }}>
                <BankingCard></BankingCard>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Banking;