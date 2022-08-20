import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { connect, useSelector } from 'react-redux';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { userLogin } from '../store/actions/actionsCreator';
import { toast } from 'react-toastify';
import auth from '../firebaseinit';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const formData = [
    { id: 2, type: "email", label: "Email", name: "email" },
    { id: 3, type: "password", label: "Password", name: "password" },
]
const Login = (props) => {
    const navigate = useNavigate()
    let location = useLocation();
    const user = useSelector(state => state.rootReducer?.auth?.user)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError,] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

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
        return <Loading></Loading>;
    }


    const onSubmit = async (data) => {
        await props.userLogin(data, navigate)
        await signInWithEmailAndPassword(data.email, data.password)
        reset()
    };
    return (
        <div className='login'>
            <div className='container col-8 col-md-6 offset-md-3 mt-5 login_form p-5 rounded-3'>
                <img className='img_login py-2' src="https://i.ibb.co/8j53qPn/bank-logo-1-removebg-preview.png" width="50px" alt="" />
                <h2 className='text-center'>ArBank</h2>
                <h2 className='text-center text-danger fs-4'>Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        formData.map(data =>
                            <div key={data.id} className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">{data.label}</label>
                                <input {...register(`${data.name}`, { required: true, minLength: data.minlength })} type={data.type} className="form-control" name={data.name} id="exampleFormControlInput1" />
                                {errors.name?.type === 'minLength' ? <span className='text-danger'> {errors.name?.type === 'minLength' && "Error"}</span>
                                    :
                                    <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>}
                            </div>
                        )
                    }
                    <div>{userError}</div>
                    <p>New to ArBank ?<Link className='text-decoration-none text-danger' to="/register"> Please Register</Link></p>
                    <input className='btn btn-danger' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};
export default connect(null, { userLogin })(Login);