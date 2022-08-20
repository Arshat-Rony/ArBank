import * as Types from "../actions/types"

const init = []

const transactionreducer = (state = init, action) => {

    switch (action.type) {
        case Types.SET_TRANSACTION: {
            let transactions = [...state]
            transactions.unshift(action.payload.transaction)
            return transactions
        }

        case Types.LOAD_TRANSACTION: {
            return action.payload.transaction.reverse()
        }

        case Types.UPDATE_TRANSACTION: {
            let updatedTransaction = action.payload.transaction
            let transactions = [...state]
            return transactions.map(trans => {
                if (trans._id === updatedTransaction._id) {
                    return action.payload.transaction
                }
                return trans
            })
        }

        case Types.DELETE_TRANSACTION: {
            let transactions = [...state]
            console.log(action.payload._id)
            return transactions.filter(trans => trans._id !== action.payload._id)
        }

        default: return state;
    }
}


export default transactionreducer;