import * as Types from "../actions/types"
const init = []

const worksreducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_WORKS: {
            return action.payload.works;
        }
        default: return state
    }
}

export default worksreducer;