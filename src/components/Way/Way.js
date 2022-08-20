import React from 'react';
import { GiHomeGarage } from "react-icons/gi"
import { AiFillSlackCircle } from "react-icons/ai"
import { RiMailCheckLine } from 'react-icons/ri'
// 

const waysData = [
    { id: 1, name: "Free Pre-Qualification" },
    { id: 2, name: "More Choices" },
    { id: 3, name: "Smooth Closings" },
]

const Way = () => {
    return (
        <div className='container'>
            <p className='text-uppercase text-secondary text-center'>Home mortgage loans</p>
            <h2 className='text-center'>How to get Started</h2>
            <p className='text-secondary text-center'>With the right home loan, you can refinance or buy a home and keep your financial plans on track</p>
            <div className='row row-cols-1  row-cols-lg-3 gy-5 gy-lg-0'>
                {
                    waysData.map((way, index) =>
                        <div className='text-center py-4 px-3' key={index}>
                            {index === 0 && <RiMailCheckLine className='fs-1 text-danger' />}
                            {index === 1 && <GiHomeGarage className='fs-1 text-danger' />}
                            {index === 2 && <AiFillSlackCircle className='fs-1 text-danger' />}
                            <p className='mt-2'>{way.name}</p>
                            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta cum repellat modi optio?</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Way;