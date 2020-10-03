import React, { Component } from 'react';
import {
    View, Text, Button
} from 'react-native';


export default class DashboardNew extends Component {
    render() {

        console.log('sjvfjdsvj')
        return (
            <View>
                <Text>Hello</Text>
                <Button onPress={() => this.props.navigation.navigate('DesignFlatlist')} title={'gfhhyfyjn'} />
            </View>
        );
    }
}