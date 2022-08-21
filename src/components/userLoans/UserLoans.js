import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { getUserLoans, deleteLoans } from '../../store/actions/loansActions';
import { toast } from "react-toastify"
import Loading from '../Loading';
import store from '../../store';
import * as Types from "../../store/actions/types"

const UserLoans = (props) => {
    const user = useSelector(state => state.rootReducer.auth.user.email)
    const loans = useSelector(state => state.rootReducer.loans)



    console.log(loans)

    const handleDelete = (id) => {
        props.deleteLoans(id)
        toast("Deletion Successfull")
    }

    useEffect(() => {
        props.getUserLoans(user)
        return () => {
            store.dispatch({
                type: Types.LOAD_LOANS,
                payload: {
                    loans: []
                }
            })
        }
    }, [props, user])



    return (
        <div>

            <div>
                <table className="table mt-5 mt-md-2">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">SL/No</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">Installment</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loans ? loans.map((loan, index) =>
                                <tr key={index} className='text-center'>
                                    <th scope="row">{index + 1}</th>
                                    <td>{loan.loanamount}</td>
                                    <td className='text-success'>{loan.loantype}</td>
                                    <td className='text-success'>{((parseInt(loan.loanamount) * 10) / 100).toFixed(0)}</td>
                                    <td>
                                        <button onClick={() => handleDelete(loan._id)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ) : <Loading></Loading>
                        }
                    </tbody>
                </table>
            </div>
            <Link className='pt-md-4 d-block text-center' to="/loan"><button className="btn btn-danger">Apply For Loan</button></Link>
        </div>
    );
};

export default connect(null, { getUserLoans, deleteLoans })(UserLoans);