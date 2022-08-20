import React from 'react';
import CountUp from "react-countup";
import "./Experience.css"

const data = [
    { id: 1, number: 4, name: "Assests Under Management" },
    { id: 2, number: 300, name: "Happy Clients" },
    { id: 3, number: 5000, name: "Wide Range Of Investment" },
    { id: 4, number: 28, name: "Highest EPS" },
]

const Experience = () => {
    return (
        <div className='experience_container py-5'>
            <div className='parallax'><img className='img-fluid' src="https://i.ibb.co/84nrVgG/experience-1.png" alt="" /></div>
            <div className='container d-flex justify-content-center align-items-center flex-column flex-md-row gap-5 experience_container_details '>
                {
                    data.map(ex =>
                        <div className='d-flex justify-content-md-start justify-content-center align-items-center  align-items-md-start flex-column mt-2 experience_box  p-5' key={ex.id}>
                            <CountUp className='fs-1 fw-bold' suffix={"th"} end={ex.number} enableScrollSpy scrollSpyDelay={1000} delay={0} duration={3} />
                            <p>{ex.name}</p>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Experience;