import { LOADER, LOADERFALSE } from '../actions/types';

export default (state = false, action) => {
    switch (action.payload) {
        case LOADER:
            return true;
        case LOADERFALSE:
            return false;
        default:
            return state;
    }
} 