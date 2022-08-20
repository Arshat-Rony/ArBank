import React from 'react';
import Question from '../Question/Question';
import "./Question.css"

const questions = [
    { id: 1, name: "I'm having trouble accessing my account online. What should I do?" },
    { id: 2, name: "What is the address I mail my credit card payment to?" },
    { id: 3, name: "How do I dispute a charge on my account?" },
    { id: 4, name: "How do I contact the payment assistance team?" },
    { id: 5, name: "How do I activate a card?" },
]

const Questions = () => {
    return (
        <div className='question-container container'>
            <p className='text-secondary text-center'>HELP CENTER</p>
            <h3 className='text-center text-dark'>Frequently asked question</h3>
            <p className='text-center mb-5 text-secondary'>Got a question about how we’re organised, applying to work for us, or looking for financial or shareholder information? View more Q&A here</p>
            <div className='mt-5'>
                {
                    questions.map(question =>
                        <Question key={question.id} question={question}></Question>
                    )
                }
            </div>
        </div>
    );
};

export default Questions;