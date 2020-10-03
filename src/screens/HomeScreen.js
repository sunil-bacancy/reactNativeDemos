import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation, NavigationActions } from 'react-navigation';

const DATA = [
    {
        btnName: 'FlexLayout1',
        screenName: 'FlexLayout1'
    },
    {
        btnName: 'FlexLayout2',
        screenName: 'FlexLayout2'
    },
    {
        btnName: 'DesignScreen',
        screenName: 'DesignScreen'
    },
    {
        btnName: 'TextInput',
        screenName: 'TextInput'
    },
    {
        btnName: 'ImageTouchable',
        screenName: 'ImageTouchable'
    },
    {
        btnName: 'List',
        screenName: 'List'
    },
    {
        btnName: 'Navigation',
        screenName: 'Dashboard'
    },
    {
        btnName: 'PanResponder',
        screenName: 'PanResponderDemo'
    },
    {
        btnName: 'ChessBoard',
        screenName: 'ChessBoard'
    },
    {
        btnName: 'DesignFlatlist',
        screenName: 'DesignFlatlist'
    },
    {
        btnName: 'LoginRegister',
        screenName: 'Login'
    },
    {
        btnName: 'Favorite',
        screenName: 'FavoriteList'
    },
    {
        btnName: 'Lodash',
        screenName: 'LodashDemo'
    },
    {
        btnName: 'CalendarDemo',
        screenName: 'CalendarDemo'
    },
    {
        btnName: 'ReduxDemo',
        screenName: 'ReduxDemo'
    },
    // {
    //     btnName: 'LoginRegRedux',
    //     screenName: 'LoginRegRedux'
    // },
    // {
    //     btnName: 'RegRedux',
    //     screenName: 'RegRedux'
    // },
    {
        btnName: 'ReduxCombineRHOC',
        screenName: 'ReduxCombineRHOC'
    },
    {
        btnName: 'Camera & Gallery',
        screenName: 'CameraGallery'
    },
    {
        btnName: 'FirebaseGoogle',
        screenName: 'FBGoogleSignin',
    },
    {
        btnName: 'DemoKartik',
        screenName: 'DemoKartik',
    }
]

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    onPressAsync = async () => {
        let data = {
            name: 'abc',
            city: 'xyz'
        }
        await AsyncStorage.setItem('MyKey', JSON.stringify(data));
        let asyncData = await AsyncStorage.getItem('MyKey');
        console.log('Data', asyncData);
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.mainContainer}>

                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity style={styles.btnStyele} onPress={() => navigation.navigate(item.screenName)}>
                                <Text style={styles.textStyle}>{item.btnName}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>{'DrawerMenu'}</Text>
                </TouchableOpacity>
                {/* <View>
                    <TouchableOpacity style={styles.btnStyele} >
                        <Text style={styles.textStyle}>{'AsyncStorageDemo'}</Text>
                    </TouchableOpacity>
                </View> */}

                {/* <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('FlexLayout1')}>
                        <Text style={styles.textStyle}>{'FlexLayout1'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.onPressAsync()}>
                        <Text style={styles.textStyle}>{'AsyncStorageDemo'}</Text>
                    </TouchableOpacity>
                </View>
             */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'lightblue',
        flexWrap: 'wrap'
    },

    textStyle: {
        color: 'black',
        color: 'white',
        fontWeight: 'bold',
    },

    btnStyele: {
        height: 50,
        width: 120,
        borderRadius: 15,
        backgroundColor: 'blue',
        marginHorizontal: 20,
        marginVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
