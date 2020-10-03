import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, } from 'react-native';
import AppImage from '../image/index';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { storeUserData, getUserNAme } from '../actions/userDataAction';

class RegRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            ph: 0,
        }

    }

    // onWrite = () => {
    //     this.setState({name1: this.state.name})
    //     this.setState({email1: this.state.email})
    //     this.setState({phone1: this.state.phone})
    //     this.setState({password1: this.state.password})
    //     this.setState({confirm_password1: this.state.confirm_Password})
    // }

    onPressCreate = async () => {


    }

    cfmpass;
    onPressSubmit(cfmpass) {
        const { username,
            email,
            ph,
            password
        } = this.state;
        if (username === '') {
            Alert.alert('enter username')
        } else if (email === '') {
            Alert.alert('Enter email')
        } else if (ph === '') {
            Alert.alert('enter phone number')
        } else if (password === '') {
            Alert.alert('Enter Password')
        } else if (confirmPassword === '' && (password !== cfmpass)) {
            Alert.alert('Enter Confirm password')
        } else {
            this.onPressCreate()
        }
    }

    render() {

        checkonce = () => {
            if (this.props.flag !== 'suceessful') {
                this.props.navigation.navigate('LoginRegRedux');
            }
        }

        // checkonce();
        const { username, password, ph, email } = this.state
        const data1 = { username, password, ph, email };
        return (
            <View style={styles.mainContainer}>
                <View style={styles.componentCenterStyle}>
                    <Text style={styles.topTextStyle}>Let's Get Started!</Text>
                    <Text style={styles.topNextTextStyle}>Create an account to Q Allure to get all features</Text>
                </View>
                <View style={styles.inputViewStyle}>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.username_icon} />
                        <TextInput style={styles.textInputStyle}
                            placeholder={'Username'}
                            // value={username}
                            onChangeText={(username => this.setState({ username }))} >
                            {/* 
                                struct : 
                                this.state = {
                                       user1: {},

                                }                                
                             {username => this.setState({ user1: { username: username } })}> 
                             //TODO : now i don't want to override data each time so what's the better solution
                             */}

                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.email_icon} />
                        <TextInput style={styles.textInputStyle}
                            placeholder={'Email'}
                            // value={email}
                            onChangeText={(email => this.setState({ email }))}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.phone_icon} />
                        <TextInput style={styles.textInputStyle}
                            placeholder={'Phone'}
                            // value={phone}

                            onChangeText={(phone => this.setState({ ph: phone }))}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.password_icon} />
                        <TextInput style={styles.textInputStyle}
                            secureTextEntry={true}
                            placeholder={'Password'}
                            // value={password}

                            onChangeText={(password => this.setState({ password }))}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.confirm_password_icon} />
                        <TextInput style={styles.textInputStyle}
                            secureTextEntry={true}
                            placeholder={'Confirm Password'}
                        // value={confirmPassword}

                        // onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.createBtnViewStyle}>
                    <TouchableOpacity style={styles.createBtnStyle} onPress={this.props.storeUserData(data1)}>
                        <Text style={styles.createTextStyle}>CREATE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.LoginStyle}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}> Login here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function MapStateToProps(state) {
    return {
        flag: state,
    }
}

export default connect(MapStateToProps, { storeUserData, getUserNAme })(RegRedux)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 10
        // backgroundColor : 'red'
    },

    componentCenterStyle: {
        alignItems: 'center'
    },

    topTextStyle: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    topNextTextStyle: {
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

    createBtnViewStyle: {
        alignItems: 'center',
        marginVertical: 25,
        // backgroundColor : 'red'
    },

    createBtnStyle: {
        height: 45,
        width: 140,
        backgroundColor: '#0101DF',
        borderRadius: 20,
        justifyContent: 'center',
    },

    createTextStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    LoginStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
    },
})

