import React from 'react';
import "./Primarybtn.css"
const Primarybtn = (props) => {
    return (
        <div className='primary_btn'>
            {props.text}
            <div className="btn_inside"></div>
        </div>
    );
};

export default Primarybtn;