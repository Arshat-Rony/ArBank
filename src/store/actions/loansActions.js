import axios from 'axios'
import * as Types from "../actions/types"


const sendLoans = (data) => dispatch => {
    axios.post("https://arbank-server.herokuapp.com/api/users/loans", data)
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
    axios.get("https://arbank-server.herokuapp.com/api/users/getuserloans", email)
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
    axios.get("https://arbank-server.herokuapp.com/api/users/alluserloans")
        .then(res => {
            return dispatch({
                type: Types.LOAD_ALL_LOANS,
                payload: {
                    loans: res.data.loans
                }
            })
        }
        )
}

const deleteLoans = (loanid) => dispatch => {
    console.log(loanid)
    axios.delete(`https://arbank-server.herokuapp.com/api/users/deleteLoans/${loanid}`)
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