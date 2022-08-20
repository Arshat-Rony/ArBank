import React from 'react';
import "./Loanshero.css"


const Loanshero = ({ h2, h3,img }) => {
    return (
        <div className='loans_hero d-flex justify-content-center align-items-center flex-column'>
            <img className='img-fluid' src={img} alt="" />
            <h2 style={{ zIndex: "99" }} className='loans_hero_title fs-1'>{h2}</h2>
            <h3 style={{ zIndex: "99" }} className='loans_hero_title fs-5 mt-5 text-danger'>{h3}</h3>
        </div>
    );
};

export default Loanshero;