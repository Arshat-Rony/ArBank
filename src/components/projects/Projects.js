import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getAllWorks from '../../store/actions/worksAction';
import { useSelector } from 'react-redux/es/exports';
import Slider from "react-slick";
import "./Projects.css"
const Projects = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const works = useSelector(state => state.rootReducer.works)
    useEffect(() => {
        props.getAllWorks()
    }, [props])
    return (
        <div className="text-center projects_container mx-auto ">
            <div className="projects-container_details">
                <p className='text-danger'>Our Projects</p>
                <h2>All the work that we do</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, blanditiis aut tempora magnam recusandae officiis voluptates at labore iste ipsum.</p>
                <Slider {...settings}>
                    {
                        works.map(work =>
                            <div className='d-flex justify-content-center align-items-center flex-column mx-3' key={work._id}>
                                <img className='img-fluid' src={work.pictuer} alt="" />
                                <h5 className='mt-3'>{work.name}</h5>
                            </div>
                        )
                    }
                </Slider>
            </div>

        </div>
    );
};

export default connect(null, { getAllWorks })(Projects);