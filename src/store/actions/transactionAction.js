import axios from "axios"
import * as Types from "../actions/types"


const getAlltrans = (email) => dispatch => {
    axios.get(`https://arbank-server.herokuapp.com/api/users/transactions/${email}`)
        .then(res => {
            if (res) {
                dispatch({
                    type: Types.LOAD_TRANSACTION,
                    payload: {
                        transaction: res.data
                    }
                })
            }
        })
}



const sendTransaction = (data) => dispatch => {
    console.log(data)
    axios.post("https://arbank-server.herokuapp.com/api/users/transactions", data)
        .then(res => {
            console.log(res)
            if (res) {
                dispatch({
                    type: Types.SET_TRANSACTION,
                    payload: {
                        transaction: res.data.transaction
                    }
                })
            }
        })
        .catch(err => console.log(err))
}


const updateTransactions = (transaction, data) => dispatch => {
    axios.put(`https://arbank-server.herokuapp.com/api/users/transactions/${transaction._id}`, data)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: Types.UPDATE_TRANSACTION,
                payload: {
                    transaction: res.data
                }
            })
        })
        .catch(err => console.log(err))
}



const deleteTransaction = (transaction) => dispatch => {
    axios.delete(`https://arbank-server.herokuapp.com/api/users/transactions/${transaction._id}`)
        .then(res => {
            dispatch({
                type: Types.DELETE_TRANSACTION,
                payload: transaction
            })
        })
        .catch(err => console.log(err))
}
export {
    sendTransaction,
    getAlltrans,
    updateTransactions,
    deleteTransaction
}
