import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux/es/exports';
import { getAllusers, removeUser } from '../../store/actions/actionsCreator';
import { toast } from "react-toastify"

const Users = (props) => {

    const users = useSelector(state => state.rootReducer.loans)

    useEffect(() => {
        props.getAllusers()
    }, [props])


    const handleDelete = (id) => {
        props.removeUser(id)
        toast("User Deleted SUccessfully")
    }

    return (
        <div>
            <div>
                <table className="table mt-5 mt-md-2">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">SL/No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Loans</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) =>
                                <tr key={index} className='text-center'>
                                    <th scope="row">{index + 1}</th>
                                    <td className='text-capitalize'>{user.name}</td>
                                    <td className='text-success'><img width="50px" className='rounded-2' src={`${user.image}`} alt="" /></td>
                                    <td>{user?.loans?.length}</td>

                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-danger btn-sm">Delete</button>
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

export default connect(null, { getAllusers, removeUser })(Users);