export const storeUserData = (payload) => {
    return {
        type: 'STOREDATA',
        payload
    };
}

export const getUserNAme = () => {
    return {
        type: 'GETUSERNAME'
    };
}