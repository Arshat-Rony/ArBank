import React from 'react';
import { connect } from 'react-redux';
import { GiStabbedNote } from "react-icons/gi"
import { FaHandHoldingWater } from 'react-icons/fa'
import { MdStickyNote2 } from 'react-icons/md'
import { FiCheckCircle } from 'react-icons/fi'
import { sendMessage } from '../../store/actions/messsageActions';
import './AllLoans.css'
import { useForm } from "react-hook-form"
import { shallowEqual, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import Primarybtn from '../Primaybtn/Primarybtn';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const data = [
    { id: 1, name: "Quick Approval" },
    { id: 2, name: "Easy loan Repayment" },
    { id: 1, name: "100% Transparency" },
]


const process = [
    { id: 1, name: "Apply in 10 minutes" },
    { id: 2, name: "Hear from us in 1 hour" },
    { id: 3, name: "A decision in 24 hours" },
    { id: 4, name: "Your loan is funded" },
]


const criteria = [
    { id: 1, name: "You must be a Salaried Employee" },
    { id: 2, name: "Age: 20-50 years old" },
    { id: 3, name: "Net Monthly Income must be more than $5000." },
    { id: 4, name: "No defaults in the last 24 months." },
]

const formData = [
    { id: 2, name: "name", label: "Your Name", width: "48px" },
    { id: 3, name: "email", label: "Your Email", width: "48px" },
    { id: 4, name: "message", label: "Your Message", width: "200px" },
]

const AllLoans = (props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const message = useSelector(state => state.rootReducer);


    const onSubmit = (data) => {
        console.log(data)
        props.sendMessage(data)
        if (message.message) {
            toast("Message sent successfully")
        }

        reset()
    };
    return (
        <div className='row row-cols-1 row-cols-md-2 container mx-auto'>
            <div>
                <div className='mb-5 p-md-4 bg-white'>
                    <h3>Openning Hours</h3>
                    <hr className='text-danger mb-5' />
                    <p className='d-flex text-secondary justify-content-between  align-items-center'><span className='d-inline-block'>Sun - Thurs</span> <span className='d-inline-block'>8:00 AM - 5:00 PM</span></p>
                    <hr />
                    <p className='d-flex text-secondary justify-content-between  align-items-center'><span className='d-inline-block'>Thurs - Sun</span> <span className='d-inline-block'>8:00 AM - 3:00 PM</span></p>
                    <hr />
                    <p className='d-flex text-secondary justify-content-between align-items-center'><span className='d-inline-block'>Sun</span> <span className='d-inline-block'>CLOSED</span></p>
                    <hr />
                </div>
                <div className='mt-5 p-md-4'>
                    <h3>Book An Appointment</h3>
                    <hr className='text-danger mb-5' />
                    <form>
                        {
                            formData.map((data, index) =>
                                <div key={data.id} className="mb-3">
                                    <label class="form-label text-secondary">{data.label}</label>
                                    <input style={{ minHeight: data.width }}  {...register(`${data.name}`, { required: true })} type={data.type} className={`form-control shadow-none ${index === 2 && "textarea text-start"}`} name={data.name} />
                                    <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>
                                </div>
                            )
                        }
                        <div onClick={handleSubmit(onSubmit)} className='my-5' style={{ width: "190px" }}>
                            <Primarybtn text="Send Us Message"></Primarybtn>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <img className='img-fluid' src="https://i.ibb.co/9wtHX6B/allloan-resized-1.png" alt="" />
                <h2 className='mt-5'>About business loan and how does it work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro expedita sed voluptate! Rerum rem molestias adipisci voluptatum esse quisquam fugiat voluptates minus in ipsa nihil maiores, nostrum dolores sed molestiae ex! Eveniet?</p>

                <h4 className='mt-5'>Features of business loan</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dicta perferendis saepe neque quam vero!</p>
                <div className='d-flex justify-content-center align-items-center gap-5 flex-column flex-md-row mt-4'>
                    {
                        data.map((item, index) =>
                            <div key={item.id} className="d-flex justify-content-center align-items-center flex-column">
                                {index === 0 && <span className='p-3 text-danger border border-danger rounded-circle bg-white'><GiStabbedNote className='fs-1' /></span>}
                                {index === 1 && <span className='p-3 text-danger border border-danger rounded-circle bg-white'><FaHandHoldingWater className='fs-1' /></span>}
                                {index === 2 && <span className='p-3 text-danger border border-danger rounded-circle bg-white'><MdStickyNote2 className='fs-1' /></span>}
                                <p className='mt-4'>{item.name}</p>
                            </div>
                        )
                    }
                </div>
                <h4 className='mt-5'>You deserve a better business loan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem porro quo modi illo sapiente?</p>
                <h4 className='mt-5 mb-4'>We usually follow 4 steps to get a better business loans.</h4>

                <div>
                    {
                        process.map((data, index) =>
                            <div className='process mt-5'>
                                <p className='fw-bold'><span className={`text-danger px-3 py-2 border border-danger rounded-circle me-3 ${index === 3 || "line"}`}>{index + 1}</span> {data.name}</p>
                                <p className='mt-4 ms-5 ps-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aliquid eaque voluptatem facere minima ipsam ea doloribus odio quae enim.</p>
                            </div>
                        )
                    }

                </div>
                <div className='my-5' style={{ width: "135px" }}>
                    <Link className='text-decoration-none' to="/apply"> <Primarybtn text="Apply Now"></Primarybtn></Link>
                </div>
                {/* <button className="btn btn-danger my-4">Apply now</button> */}

                <h4>Eligibility Criteria</h4>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, commodi vel! Ipsam, nisi blanditiis quia a dicta dolorem dolore. Iste?</p>

                <div className='mt-4'>
                    {
                        criteria.map(data => <p><FiCheckCircle className='text-danger me-2' /> {data.name}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default connect(null, { sendMessage })(AllLoans);