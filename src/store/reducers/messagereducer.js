import * as Types from "../actions/types"

const init = "";

const messagereducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_MESSAGE: {
            return action.payload
        }
        default: return state
    }
}


export default messagereducer;