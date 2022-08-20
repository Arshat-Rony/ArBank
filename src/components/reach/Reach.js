import React from 'react';
import { MdOutlineAttachEmail } from 'react-icons/md'
import { BsFillPhoneVibrateFill } from "react-icons/bs"
import { GoMailRead } from 'react-icons/go'
import "./Reach.css";
import { shallowEqual, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import { useForm } from 'react-hook-form';


const reaches = [
    { id: 1, name: "Email", details: [{ text: "Dhaka,Bangladesh", text2: "dhaka@gmail.com" }, { text: "Chittagong", text2: "chittagong@mail.com" }] },
    { id: 2, name: "Phone", details: [{ text: "Customer Care Center", text2: "2-378-8474-99" }, { text: "Sunday through Thursday", text2: "7:30am to 12:00am IST" }] },
    { id: 3, details: [{ text: "Customer Care Center", text2: "P.O. Box 4906 Farmgate, FL 33014-8500", text3: "For information about accounts and services, deaf and hard of hearing customers can also contact us via teletypewriter machines (TTY / TDD) at   1-888-801-4871." }] }
]


const formData = [
    { id: 1, name: "subject", label: "Subject" },
    { id: 2, name: "name", label: "Your Name" },
    { id: 3, name: "email", label: "Your Email" },
    { id: 4, name: "message", label: "Your Message", width: 1 },
]


const Reach = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const authenticatedUser = useSelector(state => state.rootReducer.auth.isAuthenticated, shallowEqual)
    const [user] = useAuthState(auth);

    const onSubmit = (data) => console.log(data);

    return (
        <div className='reach_section'>
            <div className='reach_cotainer container d-flex justify-content-center align-items-center flex-column flex-md-row gap-5'>
                {reaches.map((r, index) =>
                    <div className='mt-5 border text-center pt-5 rounded-2' key={r.id}>
                        {index === 0 && <MdOutlineAttachEmail className='text-danger fs-1' />}
                        {index === 1 && <BsFillPhoneVibrateFill className='text-danger fs-1' />}
                        {index === 2 && <GoMailRead className='text-danger fs-1' />}

                        <p>{r.name}</p>
                        {
                            r.details.map(detail =>
                                <>
                                    <p>{detail.text}</p>
                                    <p className={`${index !== 1 ? "text-secondary" : "text-danger"}`}>{detail.text2}</p>
                                    <p className='text-secondary'>{detail?.text3}</p>
                                </>
                            )
                        }
                    </div>
                )}
            </div>

            <div className='query_container d-flex justify-content-between align-items-center flex-column flex-md-row mt-5 gap-5 container-fluid'>
                <img className='img-fluid' src="https://i.ibb.co/zGnDNPr/apply-resized-1.png" alt="" />
                <div className='mt-5 mt-md-0 pt-md-5'>
                    <p className='text-secondary text-uppercase'>add your heading text here</p>
                    <h2>Send us a quary</h2>
                    <p>A question? An issue? Drop us a line and we'll see how we can help.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            formData.map(data =>
                                <div key={data.id} className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">{data.label}</label>
                                    <input style={{ minHeight: "48px" }} {...register(`${data.name}`, { required: true })} type={data.type} className="form-control shadow-none" name={data.name} value={`${data.id === 3 && authenticatedUser ? user?.email : ""}`} />
                                    <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>
                                </div>
                            )
                        }
                        <input type="submit" className='btn btn-danger btn-lg mt-3 mb-5 mt-mb-0' value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reach;