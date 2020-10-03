export default (state = {}, action) => {
    // let d = action.payload;
    switch (action.type) {
        case 'STOREDATA':
            let d = action.payload;
            state = d;
            console.log('dtata : ' + state + ' getting data : ' + d);

            //this.props.navigation.navigate('LoginRegRedux');
            return 'suceessful';
            break;
        case 'GETUSERNAME':
            return state.username;
            break;
        default:
        // alert('invalid');

    }
}