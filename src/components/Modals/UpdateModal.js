import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateTransactions, deleteTransaction } from '../../store/actions/transactionAction';
import { toast } from 'react-toastify';

const UpdateModal = ({ show, handleShow, handleClose, transaction, setShow, setSingleTrnas, updateTransactions, deleteTransaction, number }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        updateTransactions(transaction, data)
        reset()
        setShow(false)
        toast("Your data is updated")
    };
    const deleteItem = (trans) => {
        deleteTransaction(trans)
        setShow(false)
        toast("Your Item is Permanently Deleted")
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h4 className='my-4 text-center'>{transaction ? "Update Your Transactions" : "Are you sure ? You want to delete the Item"}</h4>
                    {
                        number === 0 ? <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                            <input className='mx-auto d-block ps-4' style={{ height: "38px", width: "80%" }} type="text" name="amount" id="amount" {...register("amount", { required: true })} />
                            <input className='btn btn-danger rounded-0 mt-2' type="submit" value="Update" />
                        </form> : <div className='text-end'><button onClick={() => setShow(false)} className="btn btn-secondary rounded-0">No</button>  <button onClick={() => deleteItem(transaction)} className="btn btn-danger rounded-0">Yes</button> </div>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default connect(null, { updateTransactions, deleteTransaction })(UpdateModal);