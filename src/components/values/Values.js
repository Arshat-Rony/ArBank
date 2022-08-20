
import React from 'react';
import { MdLightMode } from "react-icons/md"
import { GiBossKey } from 'react-icons/gi'
import { RiUserStarFill } from 'react-icons/ri'
import "./Values.css"
const valuesData = [
    { id: 1, name: "Innovative" },
    { id: 2, name: "Talent" },
    { id: 3, name: "Enabling" },
    { id: 4, name: "Commercially Responsible" },
]
const Values = () => {
    return (
        <div className='values_container p-5 ps-md-0 d-flex align-items-center flex-column flex-md-row py-5'>
            <div className='mt-5 mt-md-0 ms-md-5'>
                <h2 className='mb-5'>Our Company Values</h2>
                {
                    valuesData.map((value, index) =>

                        <div key={value.id} className='d-flex justify-content-start mt-3' >
                            <span className='finance_icon d-block text-start'>{index === 0 && <MdLightMode />}</span>
                            <span className='finance_icon d-block text-start'>{index === 1 && <GiBossKey />}</span>
                            <span className='finance_icon d-block text-start'>{index === 2 && <GiBossKey />}</span>
                            <span className='finance_icon d-block text-start'>{index === 3 && <RiUserStarFill />}</span>

                            <div className='ms-4 mt-4'>
                                <h4>{value.name}</h4>
                                <small> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, enim magnam. Nam, mollitia dolores. Architecto, quasi? Omnis laboriosam harum nihil?</small>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Values;