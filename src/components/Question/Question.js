import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai"
import { IoCaretUpSharp } from "react-icons/io5"
import "./Question.css"
const Question = ({ question }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='question'>
            <p className={`mt-4 ${show ? "text-danger" : "text-dark"}`}>{question.name} <span onClick={() => setShow(!show)} className={`question_icon border border-secondary rounded-circle p-1 ${show ? "d-none" : "d-inline"}`}>
                <AiFillCaretDown /></span> <span onClick={() => setShow(!show)} className={`question_icon border border-secondary rounded-circle p-1 ${show ? "d-inline" : "d-none"}`}><IoCaretUpSharp /></span></p>
            <p className={`${show ? "d-inline" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt vitae possimus animi?</p>
        </div>
    );
};

export default Question;