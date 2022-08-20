import * as TYPES from "../actions/types";


const init = {
    isAuthenticated: false,
    user: {},
    error: {},
};

export default function authReducer(state = init, action) {
    switch (action.type) {
        case TYPES.SET_USER: {
            return {
                user: action.payload.user,
                isAuthenticated: action.payload.user._id ? true : false,
                error: {}
            }
        }
        case TYPES.SET_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        case TYPES.UPDATE_USER: {
            let updatedUser = action.payload.user;
            // let user = { ...state.user }
            // let newUser = {
            //     name: updatedUser.name,
            //     email: updatedUser.email,
            //     income: updatedUser.income,
            //     expense: user.expense,
            //     balance: user.balance,
            //     transactions: user.transaction,
            //     profession: updatedUser.profession,
            //     image: updatedUser.image,
            //     address: updatedUser.address,
            // }

            // console.log("updateduser", updatedUser,
            //     ".............", "user", user,
            //     'newuser.............', newUser)
            return {
                user: action.payload.user,
                isAuthenticated: action.payload.user._id ? true : false,
                error: {}
            }
        }
        default: return state;
    }
}

