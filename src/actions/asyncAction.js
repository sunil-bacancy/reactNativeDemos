import { FETCH_TODO, LOADER, LOADERFALSE } from '../actions/types';

export const asyncAction = () => {
    return async dispatch => {
        dispatch({
            type: LOADER,

        })

        await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                dispatch({
                    type: FETCH_TODO,
                    payload: json
                })
                dispatch({
                    type: LOADERFALSE,
                })
            })
    }
}