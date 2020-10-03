import { connect } from 'react-redux';
import { welcomeAction } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    createWelcomeAction: (payload) =>
        dispatch(welcomeAction(payload))
    ,
})

const mapStateToProps = (state) => {
    return {
        welcome: state.welcome
    }
}

export default connect(mapStateToProps, mapDispatchToProps);