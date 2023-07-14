import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess, updateListFailure, updateListStart, updateListSuccess } from "./ListActions";
import { BASE_URL } from "../../helper";

export const getLists = async(dispatch) =>{
    dispatch(getListsStart());
    try{    
        const res = await axios.get(`${BASE_URL}/api/lists/admin`, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        console.log(res.data);
        dispatch(getListsSuccess(res.data));
    }
    catch(err){
        dispatch(getListsFailure());
    }
}

// //delete

export const deleteList = async(id,dispatch) =>{
    dispatch(deleteListStart());
    try{    
        await axios.delete(`${BASE_URL}/api/lists/`+id, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(deleteListSuccess(id));
    }
    catch(err){
        dispatch(deleteListFailure());
    }
}

// // create a list

export const createList = async(list,dispatch) =>{
    dispatch(createListStart());
    try{    
        const res = await axios.post(`${BASE_URL}/api/lists/`, list, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        
        console.log(res.data);
        dispatch(createListSuccess(res.data));
    }
    catch(err){
        dispatch(createListFailure());
    }
}

// updating
export const updateList = async(list,dispatch) =>{
    dispatch(updateListStart());
    try{    
        const res = await axios.put(`${BASE_URL}/api/lists/`+list._id, list, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(updateListSuccess(res.data));
    }
    catch(err){
        dispatch(updateListFailure());
    }
}

