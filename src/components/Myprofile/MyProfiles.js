import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { update } from '../../store/actions/actionsCreator';




const formsData = [
    { id: 1, type: "text", minlength: 1, label: "Name", name: "name" },
    { id: 3, type: "text", minlength: 1, label: "Profession", name: "profession" },
    { id: 4, type: "text", minlength: 1, label: "Address", name: "address" },
    { id: 5, type: "text", minlength: 1, label: "Comapny", name: "comapny" },
    { id: 6, type: "number", minlength: 1, label: "Income Per Month", name: "income" },
    { id: 7, type: "file", label: "Image", name: "image" },

]

const MyProfiles = (props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const user = useSelector(state => state.rootReducer.auth.user)

    const [show, setShow] = useState(false)


    const onSubmit = (newdata) => {
        const apiKey = `c5b78a8537df6d122ed36c5d215f4476`
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        const formData = new FormData();

        const image = newdata.image[0]
        formData.append("image", image)

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const userData = {
                        name: newdata.name,
                        image: data.data.display_url,
                        company: newdata.company,
                        profession: newdata.profession,
                        address: newdata.address,
                        income: newdata.income
                    }
                    console.log(data)
                    props.update(userData)
                    setShow(!show)

                }
            })
    };

    return (
        <div>
            {show || <div className="card mx-auto mt-5 mt-md-0" style={{ width: "18rem" }}>
                <div className="card-body text-center">
                    <h5 className="card-title text-center text-capitalize">{user?.name || "Avatar"}</h5>
                    <img className='img-fluid rounded-2' src={user?.image} alt="" />
                    <p className="card-text text-capitalize mt-3">Profession : {user?.profession}</p>
                    <p className="card-text text-capitalize">Address : {user?.address}</p>
                    <p className="text-danger"> Your Total Balance : <span className="text-dark fw-bold">{user.balance}</span></p>
                    <p>Income : {user.income}</p>
                    <button onClick={() => setShow(!show)} className="btn btn-danger rounded-0 ">Update Profile</button>
                </div>
            </div>}
            <div>
                {
                    show && <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            {
                                formsData?.map(data =>
                                    <div key={data.id} className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">{data.label}</label>
                                        <input {...register(`${data.name}`, { required: true, minLength: data?.minlength })} type={data.type} className="form-control shadow-none" name={data.name} />
                                        {errors.name?.type === 'minLength' ? <span className='text-danger'> {errors.name?.type === 'minLength' && "Error"}</span>
                                            :
                                            <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>}
                                    </div>
                                )
                            }
                        </div>
                        <input className='btn btn-danger' type="submit" value="Register Now" />
                    </form>
                }
            </div>
        </div>
    );
};

export default connect(null, { update })(MyProfiles);