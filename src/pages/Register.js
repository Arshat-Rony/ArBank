import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import img from "../../src/utilities/images/hero-resized-1 (1).png"
import auth from '../firebaseinit';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import { userRegister } from '../store/actions/actionsCreator';
import "./Login.css"
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loanshero from '../components/loanshero/Loanshero';
import { useLocation } from 'react-router-dom';

const formsData = [
    { id: 1, type: "text", minlength: 1, label: "Name", name: "name" },
    { id: 2, type: "email", minlength: 1, label: "Email", name: "email" },
    { id: 3, type: "password", minlength: 6, label: "Password", name: "password" },
    { id: 4, type: "password", minlength: 6, label: "Confirm Password", name: "confirmPassword" },
    { id: 5, type: "text", minlength: 1, label: "Profession", name: "profession" },
    { id: 6, type: "text", minlength: 1, label: "Address", name: "address" },
    { id: 7, type: "text", minlength: 1, label: "Comapny", name: "comapny" },
    { id: 8, type: "number", minlength: 1, label: "Income Per Month", name: "income" },

]

const Register = (props) => {
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const userAuth = useSelector(state => state.rootReducer.auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError,] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (emailUser) {
            navigate(from, { replace: true });
            toast("Welcome to ARBank");
        }
    }, [emailUser, from, navigate])

    let userError;
    if (emailError) {
        userError = <p className='text-danger'>{emailError?.message}</p>
    }

    if (emailLoading) {
        return <div style={{ marginTop: "230px" }}><Loading color="red" type="spin"></Loading></div>;
    }
    const onSubmit = (newdata) => {
        createUserWithEmailAndPassword(newdata.email, newdata.password)
        props.userRegister(newdata, navigate)

        if (userAuth.user._id) {
            toast("Welcome to arBank");
            reset()
        }
    };


    return (
        <div>
            <Header></Header>
            <div style={{ zIndex: "-190", top: "0", position: 'sticky' }} >
                <Loanshero h2="Open Account" h3="Open It in Easy Way" img={img}></Loanshero>
            </div>
            <div style={{ zIndex: "99", position: 'relative', background: "white", padding: "10px" }}>
                <div className='container col-9 col-md-6 offset-md-3 mt-2 rounded-3 py-4 px-md-5'>
                    <img className='mt-2 mx-auto d-block' src="https://i.ibb.co/8j53qPn/bank-logo-1-removebg-preview.png" width="60px" alt="" />
                    <h2 className='text-center'>ArBank</h2>
                    <h2 className='text-center text-danger fs-4'>New Account</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            {
                                formsData.map(data =>
                                    <div key={data.id} className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">{data.label}</label>
                                        <input {...register(`${data.name}`, { required: true, minLength: data.minlength })} type={data.type} className="form-control shadow-none" name={data.name} />
                                        {errors.name?.type === 'minLength' ? <span className='text-danger'> {errors.name?.type === 'minLength' && "Error"}</span>
                                            :
                                            <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>}
                                    </div>
                                )
                            }
                        </div>
                        <div><span>{userError}</span></div>
                        <p>Already registered ?<Link className='text-decoration-none ps-2 text-danger' to="/login">Log in please</Link></p>
                        <input className='btn btn-danger' type="submit" value="Register Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { userRegister })(Register);