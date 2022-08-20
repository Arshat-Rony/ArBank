import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { getUserLoans, deleteLoans } from '../../store/actions/loansActions';
import { toast } from "react-toastify"

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
    }, [props, user])



    return (
        <div>
            <Link className='pt-md-4 d-inline-block' to="/loan"><button className="btn btn-danger">Apply Loan</button></Link>
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
                            loans?.map((loan, index) =>
                                <tr key={index} className='text-center'>
                                    <th scope="row">{index + 1}</th>
                                    <td>{loan.loanamount}</td>
                                    <td className='text-success'>{loan.loantype}</td>
                                    <td className='text-success'>{((parseInt(loan.loanamount) * 10) / 100).toFixed(0)}</td>
                                    <td>
                                        <button onClick={() => handleDelete(loan._id)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default connect(null, { getUserLoans, deleteLoans })(UserLoans);