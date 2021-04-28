import { AUTH_REGISTER } from "../types";

const INITIAL_STATE = {
    user: {
        email: null,
        password: null
    }
};

export const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_REGISTER:
            console.log('payload ', action.payload)
            return {
                user : {
                    ...state.user,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }    
        default:
            return state;
    }
};