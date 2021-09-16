import { PARENTAL_CONTROL_OPT, STREAMING_OPT } from "../types";

const INITIAL_STATE = {
    current: {
        streamUsingCellular: null,
        parentalControl: null
    }
};

export const controlsReducer = (state=INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case STREAMING_OPT:
            return {
                current: {
                    ...state.current,
                    streamUsingCellular: payload
                }
            }
        case PARENTAL_CONTROL_OPT:
            return {
                current: {
                    ...state.current,
                    parentalControl: payload
                }
            }
        default: 
            return state;
    };
};