import axios from "axios"
import * as Types from "../actions/types"
const getAllWorks = () => dispatch => {
    axios.get('https://arbank-server.herokuapp.com/api/users/works')
        .then(res =>
            dispatch({
                type: Types.SET_WORKS,
                payload: {
                    works: res.data.works,
                }
            })
        )
}


export default getAllWorks;