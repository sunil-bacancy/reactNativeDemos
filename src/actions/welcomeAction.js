import { WELCOME_ACTION_PRESSED } from "./types"

export const welcomeAction = (payload) => {
    return {
        type: WELCOME_ACTION_PRESSED,
        payload,
    }
}