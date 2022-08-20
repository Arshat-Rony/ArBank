import React from 'react';
import "./Experts.css"

const data = [
    { id: 1, name: "Danny Boyle", poition: "Team Leader", appointment: "Mutual Fund Manager", picture: "https://i.ibb.co/TKq0kV7/resized-female-2.png" },
    { id: 2, name: "Susan Sandron", poition: "Team Leader", appointment: "Investment Analyst, Portfolio Management", picture: "https://i.ibb.co/K6XrYnN/resized-person-1.png" },
    { id: 3, name: "JIMMY LOW LIFE", poition: "Team Leader", appointment: "Banking and Financial Advisor, Investment that generates interest…", picture: "https://i.ibb.co/pLkNmQn/resized-person-2.png" },
    { id: 4, name: "STEPHEN LANG", poition: "Team Leader", appointment: "Banking Consultant, Investment and Financial Services", picture: "https://i.ibb.co/Z16DPDR/resized-person-3.png" },
    { id: 5, name: "TINA FEY", poition: "Team Leader", appointment: "Consultant for Insurance and Banking companies", picture: "https://i.ibb.co/zfs1Sj4/resized-female-1.png" },
]


const Experts = () => {
    return (
        <div className='container expert-section'>
            <h2 className='text-center'>Our Financial Expert</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias vitae dicta ex hic reprehenderit rerum earum, labore officia voluptate?</p>
            <div className='expert_container'>
                {
                    data.map(ex =>
                        <div className='card mt-4 md-mt-0 expert_card' key={ex.id}>
                            <img className='img-fluid' src={ex.picture} alt="" />
                            <div className='expert_card_body p-5 p-md-3'>
                                <p className='text-danger fw-bold my-0'>{ex.name}</p>
                                <p className='fw-bold my-0'>{ex.poition}</p>
                                <p className='text-secondary'><small>{ex.appointment}</small></p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>


    );
};

export default Experts;
