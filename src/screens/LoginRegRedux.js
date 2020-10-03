import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, } from 'react-native';
import AppImage from '../image/index';
import AsyncStorage from '@react-native-community/async-storage';


export default class LoginRegister extends Component {

    constructor(props) {
        super(props);
    }

    onLogin = async () => {
        if (username === '') {
            Alert.alert('enter username')
        } else if (password === '') {
            Alert.alert('Enter Password')
        } else {

            if (this.state.username != infoData.email && this.state.password != infoData.password) {
                Alert.alert('Both are incorrect')
            } else if (this.state.username != infoData.email) {
                Alert.alert('please check username')
            } else if (this.state.password != infoData.password) {
                Alert.alert('please check password')
            } else {
                this.props.navigation.navigate('DashboardNew');
                // this.props.navigation.navigate('DrawerStackNavigator')
            }
        }
    }

    render() {
        const {
            username,
            password
        } = this.state;
        return (
            <View style={styles.mainConatiner}>
                <View style={styles.componentCenterStyle}>
                    <Image style={styles.imageStyele} source={AppImage.login}></Image>
                </View>
                <View style={styles.componentCenterStyle}>
                    <Text style={styles.welcomeTextStyle}>Welcome back!</Text>
                    <Text style={styles.belowWelcomeTextStyle}>Log in to your existant account of Q Allure</Text>
                </View>
                <View style={styles.inputViewStyle}>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.username_icon} />
                        <TextInput style={styles.textInputStyle}
                            value={username}
                            onChangeText={username => this.setState({ username })}
                            placeholder={'Username'}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.password_icon} />
                        <TextInput style={styles.textInputStyle}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={password => this.setState({ password })}
                            placeholder={'Password'}>
                        </TextInput>
                    </View>
                </View>
                <View style={styles.forgotViewStyle}>
                    <Text>Forgot Password?</Text>
                </View>
                <View style={styles.loginBtnViewStyle}>
                    <TouchableOpacity style={styles.loginBtnStyle} onPress={() => { this.onLogin() }}>
                        <Text style={styles.loginTextStyle}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.componentCenterStyle, { marginVertical: 10 }]}>
                    <Text style={{ color: 'darkgrey' }}>Or connect using</Text>
                </View>
                <View style={styles.optionLoginBtnViewStyle}>
                    <TouchableOpacity style={[styles.optionLoginBtnStyle, { backgroundColor: '#3f32bf' }]}>
                        <Text style={styles.optionLoginTextStyle}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.optionLoginBtnStyle, { backgroundColor: '#FF0000' }]}>
                        <Text style={styles.optionLoginTextStyle}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignupStyle}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        marginHorizontal: 15,
        // backgroundColor : 'red'
    },

    componentCenterStyle: {
        alignItems: 'center'
    },

    imageStyele: {
        height: 115,
        width: 125,
    },

    welcomeTextStyle: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    belowWelcomeTextStyle: {
        fontSize: 11,
        color: 'grey'
    },

    inputViewStyle: {
        marginTop: 20,
    },

    innerInputStyle: {
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 25

    },

    textInputStyle: {
        flex: 1,
        paddingLeft: 15
    },

    forgotViewStyle: {
        alignItems: 'flex-end'
    },

    loginBtnViewStyle: {
        alignItems: 'center',
        marginVertical: 20
    },

    loginBtnStyle: {
        height: 45,
        width: 140,
        backgroundColor: '#3f32bf',
        borderRadius: 20,
        justifyContent: 'center',

    },

    loginTextStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    optionLoginBtnViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 28,
        alignItems: 'center'
        // backgroundColor : 'black',

    },

    optionLoginBtnStyle: {
        height: 35,
        width: 110,
        borderRadius: 7,
        justifyContent: 'center'
    },

    optionLoginTextStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

    SignupStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
})