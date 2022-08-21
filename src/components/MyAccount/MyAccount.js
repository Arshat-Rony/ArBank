import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getAlltrans, sendTransaction } from '../../store/actions/transactionAction';
import UpdateModal from '../Modals/UpdateModal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import Loading from '../Loading';
import store from '../../store';
import * as Types from "../../store/actions/types"


const formData = [
    { id: 2, type: "number", label: "Amount", name: "amount" },
    { id: 3, type: "text", label: "Deposite/Withdraw", name: "type", placeholder: "Please use correct spelling" },
]

const MyAccount = (props) => {
    const [show, setShow] = useState(false);
    const [showform, setShowform] = useState(false)
    const [singleTrans, setSingleTrans] = useState({})
    const [number, setNumber] = useState(0)
    const transactions = useSelector(state => state.rootReducer?.trans)
    const user = useSelector(state => state.rootReducer.auth.user.email)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user
        props.sendTransaction(data)
        reset()
        toast("Transactions Created Successfully")
    }
    const handleClose = () => setShow(false);
    const handleShow = (trans) => {
        setShow(true)
        setSingleTrans(trans)
        setNumber(0)
    };

    useEffect(() => {
        props.getAlltrans(user)
        return () => {
            store.dispatch({
                type: Types.LOAD_TRANSACTION,
                payload: {
                    transaction: []
                }
            })
        }
    }, [props, user, showform])

    return (
        <div className='container'>

            <button onClick={() => setShowform(!showform)} className={`btn btn-danger text-md-end d-block ms-auto`}>{showform ? "See All Transactions" : "Make New Transactions"}</button>

            <div className={`${showform ? "d-block" : "d-none"}`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        formData?.map(data =>
                            <div key={data.id} className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">{data.label}</label>
                                <input {...register(`${data.name}`, { required: true, minLength: data.minlength })} type={data.type} className="form-control" name={data.name} id="exampleFormControlInput1" placeholder={data?.placeholder} />
                                {errors.name?.type === 'minLength' ? <span className='text-danger'> {errors.name?.type === 'minLength' && "Error"}</span>
                                    :
                                    <span className='text-danger'> {errors.name?.type === 'required' && `${data.name} is required`}</span>}
                            </div>
                        )
                    }
                    <input className='btn btn-danger' type="submit" value="Send" />
                </form>
            </div>
            {<div className={`${showform ? "d-none" : "d-block"}`}>
                <table className="table mt-5 mt-md-0">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">SL/No</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions ? transactions.map((trans, index) =>
                                <tr key={index} className='text-center'>
                                    <th scope="row">{index + 1}</th>
                                    <td>{trans.amount}</td>
                                    <td className={`${trans.type === "withdraw" ? "text-danger" : 'text-success'}`}>{trans.type}</td>
                                    <td>
                                        <Button className='btn-sm' variant="primary" onClick={() => handleShow(trans)}>
                                            Update
                                        </Button></td>
                                    <td>
                                        <Button className='btn-sm btn-danger' variant="primary" onClick={() => {
                                            setShow(true)
                                            setNumber(number + 1)
                                            setSingleTrans(trans)
                                        }}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ) : <div className="d-flex justify-content-center align-items-center "><Loading color="red" type="spin"></Loading></div>
                        }
                    </tbody>
                </table>
                {
                    show && <UpdateModal number={number} transaction={singleTrans} show={show} handleShow={handleShow} handleClose={handleClose} setSingleTrans={setSingleTrans} setShow={setShow}></UpdateModal>
                }
            </div>}

        </div>
    );
};

export default connect(null, { getAlltrans, sendTransaction })(MyAccount);