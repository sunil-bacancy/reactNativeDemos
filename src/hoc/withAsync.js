import { connect } from 'react-redux';
import { asyncAction } from '../actions/asyncAction';

const mapDispatchToProps = (dispatch) => ({
    getTodos: () => {
        dispatch(asyncAction());
    }
})

const mapStateToProps = (state) => ({
    todoData: state.todoData
})

export default connect(mapStateToProps, mapDispatchToProps);