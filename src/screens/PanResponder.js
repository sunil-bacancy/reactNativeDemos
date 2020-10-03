import React, {Component} from 'react';
import {View, PanResponder, StyleSheet, Animated} from 'react-native';

class PanResponderDemo extends Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: ({nativeEvent}, gesture) => {
               console.log({gesture});
               console.log(nativeEvent)
               position.setValue({ x: gesture.dx, y: gesture.dy });
            }
         });     
          this.state = { panResponder, position };
    }

    render(){
        return (
            <Animated.View
            ref={'circle'}
            style={[{alignItems: 'center', justifyContent: 'center', flex: 1},
             this.state.position.getLayout()]} {...this.state.panResponder.panHandlers}>
                <View style={styles.circleStyle} />
            </Animated.View>
        )
    }
}

export default PanResponderDemo;

const styles = StyleSheet.create({
    circleStyle: {
        height: 70,
        width: 70,
        backgroundColor: 'red',
        borderRadius: 35,
        borderWidth: 1, 
    }
})