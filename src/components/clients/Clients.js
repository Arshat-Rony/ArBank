import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Clients.css"

const data = [
    { id: 1, picture: "https://i.ibb.co/LCMN4cH/client-3-optimized-1.png", name: "Harry Nelis", position: "Technology Officer" },
    { id: 2, picture: "https://i.ibb.co/hWwnWvs/client-4-1.png", name: "Lucy Vernel", position: "Cheif Financial Officer" },
    { id: 3, picture: "https://i.ibb.co/whkwhJJ/client-2-1.png", name: "Andrew Molony", position: "Chief Technical Advisor" },
    { id: 4, picture: "https://i.ibb.co/Bs0q83k/client-1.png", name: "Harry Nelis", position: "Assistant Technologist" },
]

const Clients = () => {
    return (
        <div className='container review_container'>
            <p className='text-center text-danger mt-5'>Client Words</p>
            <h2 className='text-center text-dark fw-bold'>What our client say</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quo commodi suscipit fugit quam quis.</p>
            <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showIndicators={false} showThumbs={false} swipeable={true}>
                {
                    data.map(client =>
                        <div key={client.id} className="review d-flex justify-content-start align-items-start flex-column align-items-md-center flex-md-row gap-3">
                            <img width="200px" className='' src={client.picture} alt="" />
                            <div className='text-start'>
                                <p className='text-danger fw-bold'>{client.name}</p>
                                <p className='fw-bold text-secondary'>{client.position}</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam modi omnis dolor dolorem fugiat molestias quisquam impedit ex. Sed ratione facilis voluptatum maxime dolores, molestias fuga cumque incidunt perspiciatis accusantium.</p>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Clients;