import axios from 'axios'
import * as Types from "../actions/types"
import jwt_decode from "jwt-decode";
import setAuthToken from '../../utilities/setAuthToken';




const userRegister = (user, navigate) => dispatch => {
    axios.post(`https://arbank-server.herokuapp.com/api/users/registration`, user)
        .then(res => {
            const token = res.data.token.split(" ")[1];
            localStorage.setItem("auth_token", token)
            setAuthToken(token)
            const decodedToken = jwt_decode(token)
            console.log(decodedToken)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: decodedToken
                }
            })
            navigate('/')
        })
        .catch(error => {
            dispatch({
                type: Types.SET_ERROR,
                payload: {
                    error: error.message
                }
            })
        })
}



const userLogin = (user, navigate) => dispatch => {
    axios.post(`https://arbank-server.herokuapp.com/api/users/login`, user)
        .then((res) => {
            const token = res.data.token.split(" ")[1];
            localStorage.setItem("auth_token", token)
            setAuthToken(token)
            const decodedToken = jwt_decode(token)
            console.log(decodedToken)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: decodedToken
                }
            })
            navigate('/home')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: Types.SET_ERROR,
                payload: {
                    error: err.message
                }
            })
        })
}


const update = (userData) => dispatch => {
    axios.put(`https://arbank-server.herokuapp.com/api/users/userupdate`, userData)
        .then(res => {
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: res.data.user
                }
            })
        })
}


const logOut = () => dispatch => {

    dispatch({
        type: Types.SET_USER,
        payload: {
            user: {}
        }
    })
    localStorage.removeItem("auth_token");

}

const getAllusers = () => dispatch => {
    axios.get("https://arbank-server.herokuapp.com/api/users/allusers")
        .then(res =>
            dispatch({
                type: Types.LOAD_USERS,
                payload: {
                    users: res.data.users
                }
            })
        )
}
const removeUser = (id) => dispatch => {
    axios.delete(`https://arbank-server.herokuapp.com/api/users/deleteuser/${id}`)
        .then(res =>
            dispatch({
                type: Types.DELETE_USER,
                payload: {
                    user: res.data.user
                }
            })
        )
}


export {
    userLogin,
    userRegister,
    logOut, update,
    getAllusers, removeUser,
}


