import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux/es/exports';
import { getAlluserLoans, deleteLoans } from '../../store/actions/loansActions';
import { toast } from 'react-toastify'
import Loading from '../Loading';
import store from '../../store';
import * as types from "../../store/actions/types"

const Alluserloans = (props) => {


    const loans = useSelector(state => state.rootReducer.loans)

    useEffect(() => {
        props.getAlluserLoans()
        return () => {
            store.dispatch({
                type: types.LOAD_ALL_LOANS,
                payload: {
                    loans: []
                }
            })
        }
    }, [props])

    const handleDelete = (id) => {
        props.deleteLoans(id)
        toast("Loans Deleted Successfull")
    }
    return (
        <div>
            <table className="table mt-5 mt-md-2">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">SL/No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loans ? loans.map((loan, index) =>
                            <tr key={index} className='text-center'>
                                <th scope="row">{index + 1}</th>
                                <td className='text-capitalize'>{loan.name}</td>
                                <td className='text-success'>{loan.loantype}</td>
                                <td>{loan.loanamount}</td>

                                <td>
                                    <button onClick={() => handleDelete(loan._id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ) : <Loading color="red" type="spin"></Loading>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default connect(null, { getAlluserLoans, deleteLoans })(Alluserloans);