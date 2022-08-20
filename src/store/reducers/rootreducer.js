import authReducer from './authreducer'
import { combineReducers } from 'redux';
import transactionreducer from './transactionreducer';
import worksreducer from './worksreducer';
import messagereducer from './messagereducer';
import { loansReducer } from './loansreducer';

const rootReducer = combineReducers({
    auth: authReducer,
    trans: transactionreducer,
    works: worksreducer,
    message: messagereducer,
    loans: loansReducer
})

export default rootReducer;