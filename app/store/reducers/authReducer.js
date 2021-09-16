import { AUTH_REGISTER, LOGOUT } from "../types";

const INITIAL_STATE = {
    user: {
        email: null,
        password: null,
        isAuth: false
    }
};

export const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_REGISTER:
            return {
                user : {
                    ...state.user,
                    id: action.payload.id,
                    email: action.payload.email,
                    isAuth: true
                }
            } 
        case LOGOUT:
            return {
                ...INITIAL_STATE
            }   
        default:
            return state;
    }
};