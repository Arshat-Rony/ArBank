import React from 'react';
import AllLoans from '../components/allloans/AllLoans';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';




const Allloan = () => {
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Choose Loan" h3="Scroll to apply" img="https://i.ibb.co/L8PdQXF/allloanhero-resized-1.png"></Loanshero>
            </div>
            <div style={{ zIndex: "99", position: 'relative', background: "rgb(255, 255, 255)", padding: "40px" }}>
                <AllLoans></AllLoans>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Allloan;