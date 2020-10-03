import { connect } from 'react-redux';
import { loaderIndicator } from '../actions/loaderAction';
import { loaderFalseIndicator } from '../actions/loaderFalseAction';

const mapDispatchToProps = (dispatch) => ({
    loaderAction: () => {
        dispatch(loaderIndicator());
    },
    loaderFalseAction: () => {
        dispatch(loaderFalseIndicator());
    }
})

const mapStateToProps = (state) => ({

    loadData: state.loadData

})

export default connect(mapStateToProps, mapDispatchToProps)