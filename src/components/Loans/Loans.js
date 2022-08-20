import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, shallowEqual, useSelector } from 'react-redux/es/exports';
import auth from '../../firebaseinit';
import { sendLoans } from '../../store/actions/loansActions';
import { useAuthState } from 'react-firebase-hooks/auth';

const formData = [
    { id: 3, type: "number", minlength: 1, label: "Loan Amount", name: "loanamount" },
    { id: 1, type: "text", minlength: 1, label: "Name", name: "name" },
    { id: 5, type: "text", minlength: 1, label: "Address", name: "address" },
    { id: 7, type: "number", minlength: 1, label: "Phone", name: "phone" },
    { id: 6, type: "text", minlength: 1, label: "Purpose Of Loan", name: "purpose" },
    { id: 8, type: "number", minlength: 1, label: "Annual Income", name: "annualincome" },
    { id: 9, type: "text", minlength: 1, purpose: ["male", "female"], label: "Gender", name: "gender" },
    { id: 4, type: "text", minlength: 6, label: "Loan Type", purpose: ["Payday Loan", "Home Loan", "Education Loan", "Business Loan", "Agricultural Loan", "Personal Loan"], name: "loantype" },
]

const Loans = (props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const user = useSelector(state => state.rootReducer.auth.user.email)


    console.log(user)

    const onSubmit = (data) => {
        data.email = user;
        props.sendLoans(data)
        reset()
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center mt-5 fs-1'>Loan Application</h2>
            <form className='mt-4 col-12 col-md-8 offset-md-3 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {
                        formData.map(data =>

                            <div key={data.id} className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">{data.label}</label>
                                {
                                    data.id === 4 || data.id === 9 ? "" : <input style={{ minHeight: "48px" }} {...register(`${data.name}`, { required: true, minLength: data.minlength })} type={data.type} className="form-control shadow-none" name={data.name} />
                                }

                                {
                                    data.id === 4 && <select {...register(`loantype`, { required: true, minLength: data.minlength })} class="form-select" aria-label="Default select example">
                                        {data.id === 4 && data.purpose.map(p => <option>{p}</option>)}
                                    </select>
                                }
                                {
                                    data.id === 9 && <select {...register(`gender`, { required: true, minLength: data.minlength })} class="form-select" aria-label="Default select example">
                                        {data.id === 9 && data.purpose.map(p => <option>{p}</option>)}
                                    </select>
                                }
                                {errors.name?.type === 'minLength' ? <span className='text-danger'> {errors.name?.type === 'minLength' && "Error"}</span>
                                    :
                                    <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>}
                            </div>



                        )
                    }
                </div>

                <div className="text-center d-flex justify-content-center align-items-center">
                    <input className='btn btn-danger btn-lg' type="submit" value="Apply Now" />
                </div>
            </form>
        </div>
    );
};

export default connect(null, { sendLoans })(Loans);