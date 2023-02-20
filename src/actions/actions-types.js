import { ADD_DRAGON, DELETE_DRAGON, REVERSE_DRAGON, SET_DRAGON } from "../constants/actions"

export const addDragon = () =>{
    return{
        type: ADD_DRAGON
    }
}


export const setDragon = payload =>{
    return{
        type: SET_DRAGON, payload
    }
}

export const deleteDragon = payload =>{
    return{
        type: DELETE_DRAGON, payload
    }
}

export const reverseDragon = () =>{
    return{
        type: REVERSE_DRAGON
    }
}