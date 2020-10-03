import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './types'
export const counterINCREMENT2 = () => {
    return {
        type: COUNTER_INCREMENT,

    }
}

export const counterDECREMENT2 = () => {
    return {
        type: COUNTER_DECREMENT,

    }
}