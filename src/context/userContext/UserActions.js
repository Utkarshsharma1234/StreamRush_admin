export const getUserStart = () =>({
    type : "GET_USERS_START"
})

export const getUserSuccess = (movies) =>({
    type : "GET_USERS_SUCCESS",
    payload : movies
})

export const getUserFailure = () =>({
    type : "GET_USERS_FAILURE"
})

export const deleteUserStart = () =>({
    type : "DELETE_USERS_START"
})

export const deleteUserSuccess = (id) =>({
    type : "DELETE_USERS_SUCCESS",
    payload : id
})

export const deleteUserFailure = () =>({
    type : "DELETE_USERS_FAILURE"
})

export const createUserStart = () =>({
    type : "CREATE_USERS_START"
})

export const createUserSuccess = (movie) =>({
    type : "CREATE_USERS_SUCCESS",
    payload : movie
})

export const createUserFailure = () =>({
    type : "CREATE_USERS_FAILURE"
})

export const updateUserStart = () =>({
    type : "UPDATE_USERS_START"
})

export const updateUserSuccess = (movie) =>({
    type : "UPDATE_USERS_SUCCESS",
    payload : movie
})

export const updateUserFailure = () =>({
    type : "UPDATE_USERS_FAILURE"
})