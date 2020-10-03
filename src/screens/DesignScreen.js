import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import AppImages from '../image';
import AsyncStorage from '@react-native-community/async-storage';

export default class DesignScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = async() => {
    let asyncData = await AsyncStorage.getItem('MyKey');
    // console.log('Design Screen',asyncData);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTextStyle}>
          <Text style={{ fontSize: 18, color: '#0b51d2', fontWeight:'bold' }}>Online Doctor Specialities</Text>
        </View>
        <View style={styles.searchStyle}>
          <View style={{ width: "73%" }}>
            <TextInput style={styles.textInputStyle}
              placeholder={'Search'}
              placeholderTextColor={'#ebe9ff'}>
            </TextInput>
          </View>
          <View style={styles.editStyle}>
            <TouchableOpacity onPress={() => alert('Clicked on Edit')} style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#fcb502' }}>Edit</Text>
              <Image style={{height:12,width:12,marginVertical:5,marginHorizontal:5}} source={AppImages.arrow}></Image>

              {/* <Text style={{ color: '#fcb502' }}>Edit</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.endStyle}>
          <View>
            <Image style={styles.imageStyle} source={AppImages.stomatology}></Image>
          </View>
          <View style={styles.imageSubStyel}>
            <Text style={{ color: '#fcb502', textAlign: 'center', fontWeight:'bold' }}>Stomatology</Text>
            <Text style={{ color: '#0b51d2', fontSize:12 }}>Lorem ipsum dolor sit amet,</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>vis no is erroribus  hendreit.</Text>
            <View style={styles.btnStyle}>
              <TouchableOpacity onPress={()=>alert('Pressed on Stomatology')} style={{ borderRadius: 5, backgroundColor: '#fcb502', width: 75, height: 30, paddingVertical: 4, borderColor: '#fcb502', marginVertical: 6 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.endStyle}>
          <View>
            <Image style={styles.imageStyle} source={AppImages.ophthalmology}></Image>
          </View>
          <View style={styles.imageSubStyel}>
            <Text style={{ color: '#ff5a01', textAlign: 'center', fontWeight:'bold' }}>Ophthalmology</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>Lorem ipsum dolor sit amet,</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>vis no is erroribus  hendreit.</Text>
            <View style={styles.btnStyle}>
              <TouchableOpacity onPress={()=>alert('Pressed on Ophthalmology')} style={{borderRadius: 5, backgroundColor: '#ff5a01', width: 75, height: 30, paddingVertical: 4, borderColor: '#ff5a01', marginVertical:6 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.endStyle}>
          <View>
            <Image style={styles.imageStyle} source={AppImages.neurology}></Image>
          </View>
          <View style={styles.imageSubStyel}>
            <Text style={{ color: '#fe352a', textAlign: 'center', fontWeight:'bold' }}>Neurology</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>Lorem ipsum dolor sit amet,</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>vis no is erroribus  hendreit.</Text>
            <View style={styles.btnStyle}>
              <TouchableOpacity onPress={()=>alert('Pressed on Neurology')} style={{ borderRadius: 5, backgroundColor: '#fe352a', width: 75, height: 30, paddingVertical: 4, borderColor: '#fe352a', marginVertical:6 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.endStyle}>
          <View>
            <Image style={styles.imageStyle} source={AppImages.surgery}></Image>
          </View>
          <View style={styles.imageSubStyel}>
            <Text style={{ color: '#0b51d2', textAlign: 'center', fontWeight:'bold' }}>Surgery</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>Lorem ipsum dolor sit amet,</Text>
            <Text style={{ color: '#0b51d2',fontSize:12 }}>vis no is erroribus  hendreit.</Text>
            <View style={styles.btnStyle}>
              <TouchableOpacity onPress={()=>alert('Pressed on Surgery')} style={{  borderRadius: 5, backgroundColor: '#0b51d2', width: 75, height: 30, paddingVertical: 4, borderColor: '#0b51d2', marginVertical:6 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginVertical:20,
    marginRight: 20,
  },

  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  searchStyle: {
    // marginVertical:20,
    marginTop:20,
    flexDirection: "row",
    // backgroundColor:'red'
  },

  textInputStyle: {
    borderWidth: 1,
    borderColor: '#0b51d2',
    borderRadius: 30,
    paddingHorizontal: 15,
    backgroundColor: '#0b51d2',
    height: 40,
    shadowColor: 'grey',
        shadowRadius:20,
        shadowOpacity: 0.3,
        elevation: 3,
        shadowOffset: {
            height: 0, 
            width: 0
        },
  },

  editStyle: {
    flexDirection: 'row',
    // backgroundColor:'red',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },

  endStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
  },

  imageStyle: {
    height: 90,
    width: 90,
    borderColor: 'black'
  },

  imageSubStyel: {
    flexDirection: 'column',
  },

  btnStyle: {
    alignItems: 'center',
    
  }
})