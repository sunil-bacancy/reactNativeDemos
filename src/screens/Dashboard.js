import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>{'Go To HomeScreen'}</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

export default Dashboard;
