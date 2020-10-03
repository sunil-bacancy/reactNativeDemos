import { WELCOME_ACTION_PRESSED } from "../actions/types";

const initialState = {
    welcomeText: 'welcome to React Native!!!!!',
    sss: 'ssssss'
}

export default welcome = (state = initialState, action) => {
    switch (action.type) {
        case WELCOME_ACTION_PRESSED:
            return { ...state, welcomeText: action.payload };
        default:
            return state;
    }
} 