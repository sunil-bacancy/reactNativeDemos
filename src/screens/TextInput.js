import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      dataVisible: false
    }
  }

  onWriteName(nameInfo) {
    this.setState({ name: nameInfo })
  }
  onWriteEmail(emailInfo) {
    this.setState({ email: emailInfo })
  }
  onWritePassword(passwordInfo) {
    this.setState({ password: passwordInfo })
  }

  onWrite = () => {
    this.setState({ name1: this.state.name })
    this.setState({ email1: this.state.email })
    this.setState({ password1: this.state.password })
  }

  onPressBack = () => {
    this.setState({ dataVisible: false })
    this.setState({name:'', email:'', password:''})
  }
  onPressSubmit = () => {
    if (this.state.name === '') {
      Alert.alert('Please Enter Name')
    } else if (this.state.email === '') {
      Alert.alert('Please Enter Email')
    } else if (this.state.password === '') {
      Alert.alert('Please Enter Password')
    }
    else {
      this.onWrite()
      this.setState({ dataVisible: true })
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {
          !this.state.dataVisible ?
            <View>
              <View>
                <Text style={styles.textStyle}>Name:</Text>
                <TextInput style={styles.textInputStyle}
                  placeholder={'Enter Your Name'}
                  // autoCapitalize={'words'}
                  autoFocus={true}
                  // editable={false}
                  maxLength={20}
                
                  value={this.state.name}
                  onChangeText={nameInfo => this.onWriteName(nameInfo)}></TextInput>
              </View>
              <View>
                <Text style={styles.textStyle}>Email:</Text>
                <TextInput style={styles.textInputStyle}
                  placeholder={'Enter Your Email'}
                  value={this.state.email}
                  keyboardType={'email-address'}
                  onChangeText={emailInfo => this.onWriteEmail(emailInfo)}></TextInput>
              </View>
              <View>
                <Text style={styles.textStyle}>Password:</Text>
                <TextInput style={styles.textInputStyle}
                  placeholder={'Enter Your Password'}
                  
                  value={this.state.password}
                  secureTextEntry={true}
                  onChangeText={passwordInfo => this.onWritePassword(passwordInfo)}></TextInput>
              </View>
              <View style={styles.btnStyle}>
                <Button title='Submit' onPress={this.onPressSubmit}></Button>
              </View>
            </View>
            :
            <View>
              <View style={styles.backContainer}>
                <Text>Name:{this.state.name1}</Text>
                <Text>Email:{this.state.email1}</Text>
                <Text>Password:{this.state.password1}</Text>
              </View>
              <View style={styles.btnStyle}>
                <Button title={'Back'} onPress={this.onPressBack}></Button>
              </View>
            </View>
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    marginLeft:35,
    marginRight:35,

  },

  textStyle: {
    marginTop: 10,
    fontWeight:'bold'
  },

  textInputStyle: {
    borderWidth: 2,
    borderRadius:20,
    borderTopWidth: 1,
    // width:250,
    height:45,
    paddingHorizontal:10,
  },

  btnStyle: {
    marginTop:10,
    paddingTop:13,
    paddingBottom:13,
    marginLeft:25,
    marginRight:25,
    backgroundColor:'#00BCD4',
    borderRadius:20,
    borderWidth: 4,
    borderColor:'#fff'
  },

  backContainer:{
    marginRight:60,
    marginRight:60,
  }

});