import axios from "axios"
import * as Types from "../actions/types"
const getAllWorks = () => dispatch => {
    axios.get('http://localhost:8000/api/users/works')
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