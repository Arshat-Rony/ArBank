import axios from 'axios'
import * as Types from "../actions/types"


const sendLoans = (data) => dispatch => {
    axios.post("http://localhost:8000/api/users/loans", data)
        .then(res =>
            dispatch({
                type: Types.SET_LOANS,
                payload: {
                    loans: res.data.newloan
                }
            })
        )
}

const getUserLoans = (email) => dispatch => {
    axios.get("http://localhost:8000/api/users/getuserloans", email)
        .then(res => {
            return dispatch({
                type: Types.LOAD_LOANS,
                payload: {
                    loans: res.data.loans
                }
            })
        }
        )
}

const getAlluserLoans = () => dispatch => {
    axios.get("http://localhost:8000/api/users/alluserloans")
        .then(res => {
            return dispatch({
                type: Types.LOAD_LOANS,
                payload: {
                    loans: res.data.loans
                }
            })
        }
        )
}

const deleteLoans = (loanid) => dispatch => {
    console.log(loanid)
    axios.delete(`http://localhost:8000/api/users/deleteLoans/${loanid}`)
        .then(res => {
            console.log(res)
            return dispatch({
                type: Types.DELETE_LOANS,
                payload: {
                    loan: res.data.loan
                }
            })
        }
        )
}



export {
    sendLoans,
    getUserLoans,
    deleteLoans,
    getAlluserLoans
}