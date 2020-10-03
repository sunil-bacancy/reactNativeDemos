import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert,}from 'react-native';
import AppImage from '../image/index';
import AsyncStorage from '@react-native-community/async-storage'; 


export default class Registration extends Component{
    constructor (props){
        super(props);
        this.state = {
            username : '',
            email : '',
            phone : '',
            password : '',
            confirmPassword : '',
        }

    }
    
    // onWrite = () => {
    //     this.setState({name1: this.state.name})
    //     this.setState({email1: this.state.email})
    //     this.setState({phone1: this.state.phone})
    //     this.setState({password1: this.state.password})
    //     this.setState({confirm_password1: this.state.confirm_Password})
    // }

    onPressCreate = async() => {
        let info = {
            username : this.state.username,
            email : this.state.email,
            phone : this.state.phone,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword,
        }

        await AsyncStorage.setItem('MyData', JSON.stringify(info))
        this.props.navigation.navigate('Login');
        // console.log('INFO',asyncData);
    }
    
    onPressSubmit (){
        const {  username,
        email,
        phone ,
        password,
        confirmPassword } =this.state;
        if(username === ''){
            Alert.alert('enter username')
        } else if(email === ''){
            Alert.alert('Enter email')
        } else if(phone === ''){
            Alert.alert('enter phone number')
        } else if(password === ''){
            Alert.alert('Enter Password')
        } else if(confirmPassword === ''){
            Alert.alert('Enter Confirm password')
        } else {
            this.onPressCreate()
        }
    }

    render (){
        const {  username,
            email,
            phone ,
            password,
            confirmPassword } =this.state;
        return (
            <View style = {styles.mainContainer}>
                <View style = {styles.componentCenterStyle}>
                    <Text style = {styles.topTextStyle}>Let's Get Started!</Text>
                    <Text style = {styles.topNextTextStyle}>Create an account to Q Allure to get all features</Text>
                </View>
                <View style={styles.inputViewStyle}>
                    <View style={styles.innerInputStyle }>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.username_icon} />
                        <TextInput style={styles.textInputStyle}
                            placeholder={'Username'}
                            value = {username}
                            onChangeText = {username => this.setState({username})}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.email_icon} />
                        <TextInput style={styles.textInputStyle}
                            placeholder={'Email'} 
                            value = {email}
                            onChangeText = {email => this.setState({email})}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.phone_icon} />
                        <TextInput style={styles.textInputStyle}
                            placeholder={'Phone'}
                            value = {phone}

                            onChangeText = {phone => this.setState({phone})}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.password_icon} />
                        <TextInput style={styles.textInputStyle}
                            secureTextEntry = {true}
                            placeholder={'Password'}
                            value = {password}

                            onChangeText = {password => this.setState({password})}>
                        </TextInput>
                    </View>
                    <View style={styles.innerInputStyle}>
                        <Image style={{ height: 13, width: 13 }} source={AppImage.confirm_password_icon} />
                        <TextInput style={styles.textInputStyle}
                            secureTextEntry = {true}
                            placeholder={'Confirm Password'}
                            value = {confirmPassword}

                            onChangeText = {confirmPassword => this.setState({confirmPassword})}>
                        </TextInput>
                    </View>
                </View>
                <View style = {styles.createBtnViewStyle}>
                    <TouchableOpacity style = {styles.createBtnStyle} onPress = {() =>{this.onPressSubmit()}}>
                        <Text style = {styles.createTextStyle}>CREATE</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.LoginStyle}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
                        <Text style = {{color : 'blue', fontWeight : 'bold'}}> Login here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        marginHorizontal : 15,
        marginTop : 10
        // backgroundColor : 'red'
    }, 

    componentCenterStyle : {
        alignItems : 'center'
    },

    topTextStyle : {
        fontSize : 22,
        fontWeight : 'bold',
    },

    topNextTextStyle : {
        fontSize : 11,
        color : 'grey'
    },

    inputViewStyle : {
        marginTop : 20,
    },

    innerInputStyle: {
        flexDirection: 'row',
        borderRadius:30,
        backgroundColor:'white',
        alignItems:"center",
        marginVertical:10,
        paddingHorizontal : 25
        
    },

    textInputStyle: {
        flex:1,
        paddingLeft : 15 
    },

    createBtnViewStyle : {
        alignItems : 'center',
        marginVertical : 25,
        // backgroundColor : 'red'
    },

    createBtnStyle : {
        height : 45,
        width : 140,
        backgroundColor : '#0101DF',
        borderRadius : 20,
        justifyContent : 'center',
    },

    createTextStyle : {
        fontWeight : 'bold',
        color : 'white',
        textAlign : 'center',
    },
    
    LoginStyle : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginVertical : 5,
    }, 
})