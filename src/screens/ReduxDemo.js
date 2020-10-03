import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { counterIncrement, counterDecrement } from '../actions'
class ReduxDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.counterTitle}>Counter</Text>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={this.props.counterIncrement}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>{this.props.count}</Text>
                    <TouchableOpacity onPress={this.props.counterDecrement}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    counterContainer: {
        flexDirection: 'row',

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20
    }
})

function mapStateToProps(state) {
    return {
        count: state
    }
}

export default connect(mapStateToProps, { counterIncrement, counterDecrement })(ReduxDemo) 