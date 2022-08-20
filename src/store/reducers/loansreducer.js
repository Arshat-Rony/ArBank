import * as Types from "../actions/types"
const init = []

const loansReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_LOANS: {
            let loans = [...state]
            return loans
        }
        case Types.LOAD_LOANS: {
            return action.payload.loans.reverse()
        }
        case Types.DELETE_LOANS: {
            let loans = [...state]
            return loans.filter(loan => loan._id !== action.payload.loan._id)
        }
        case Types.LOAD_USERS: {
            return action.payload.users.reverse()
        }
        case Types.DELETE_USER: {
            let users = [...state]
            return users.filter(user => user._id !== action.payload.user._id)
        }
        case Types.LOAD_ALL_LOANS: {
            return action.payload.loans.reverse()
        }

        default: return state
    }
}

export {
    loansReducer
}