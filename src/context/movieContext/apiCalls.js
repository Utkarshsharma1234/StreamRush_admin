import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMovieFailure, getMovieStart, getMovieSuccess } from "./MovieActions"
import axios from "axios";
import { BASE_URL } from "../../helper";

export const getMovies = async(dispatch) =>{
    dispatch(getMovieStart());
    try{    
        const res = await axios.get(`${BASE_URL}/api/movies`, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(getMovieSuccess(res.data));
    }
    catch(err){
        dispatch(getMovieFailure());
    }
}

//delete

export const deleteMovie = async(id,dispatch) =>{
    dispatch(deleteMovieStart());
    try{    
        await axios.delete(`${BASE_URL}/api/movies/`+id, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(deleteMovieSuccess(id));
    }
    catch(err){
        dispatch(deleteMovieFailure());
    }
}

// create a movie

export const createMovie = async(movie,dispatch) =>{
    dispatch(createMovieStart());
    try{    
        const res = await axios.post(`${BASE_URL}/api/movies/`, movie, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(createMovieSuccess(res.data));
    }
    catch(err){
        dispatch(createMovieFailure());
    }
}