import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Props : ', this.props);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button
                    title="Go to Welcome"
                    onPress={() => navigation.navigate('Welcome')}
                />
                <Text>see</Text>
                <MaterialCommunityIcons
                    name={'arrow-left'}
                    size={30}
                    color={'red'}
                // style={{ paddingTop: 8 }}
                ></MaterialCommunityIcons>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row'
    },
});