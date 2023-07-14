import axios from "axios";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess } from "./UserActions";
import { BASE_URL } from "../../helper";

export const getUsers = async(dispatch) =>{
    dispatch(getUserStart());
    try{    
        const res = await axios.get(`${BASE_URL}/api/users`, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        console.log(res.data);
        dispatch(getUserSuccess(res.data));
    }
    catch(err){
        dispatch(getUserFailure());
    }
}

//delete a user

export const deleteUser = async(id,dispatch) =>{
    dispatch(deleteUserStart());
    try{    
        await axios.delete(`${BASE_URL}/api/users/`+id, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(deleteUserSuccess(id));
    }
    catch(err){
        dispatch(deleteUserFailure());
    }
}
