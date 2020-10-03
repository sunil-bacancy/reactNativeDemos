import { connect } from 'react-redux';
import { counterIncrement, counterDecrement } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    counterIncrementAction: () => {
        dispatch(counterIncrement());
    },

    counterDecrementAction: () => {
        dispatch(counterDecrement());
    }
})

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps, mapDispatchToProps);
