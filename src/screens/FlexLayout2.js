import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FlexLayout2 extends  Component{

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.sub_container_1}>
          <View style={{height: 70, width:70, justifyContent: 'center', backgroundColor: 'red'}}><Text style={styles.txt}>1</Text></View>
          <View style={{height: 70, width:70, justifyContent: 'center', backgroundColor: 'blue'}}><Text style={styles.txt}>2</Text></View>
          <View style={{height: 70, width:70, justifyContent: 'center', backgroundColor: 'green'}}><Text style={styles.txt}>3</Text></View>
        </View>
        <View style={styles.sub_container_2}>
          <View style={{height: 70, flex:1, justifyContent: 'center',}}></View>
        </View>
        <View style={styles.sub_container_3}>
          <View style={{height: 70, flex:1, justifyContent: 'center', backgroundColor: 'navy'}}><Text style={styles.txt}>4</Text></View>
        </View>
        <View style={styles.sub_container_2}>
          <View style={{height: 70, flex:1, justifyContent: 'center',}}></View>
        </View>
        <View style={styles.sub_container_4}>
          <View style={{height: 70, width:70, justifyContent: 'center', backgroundColor: 'yellow'}}><Text style={styles.txt}>5</Text></View>
          <View style={{height: 70, width:70, justifyContent: 'center', backgroundColor: 'black'}}><Text style={styles.txt}>6</Text></View>
          <View style={{height: 70, width:70, justifyContent: 'center', backgroundColor: 'pink'}}><Text style={styles.txt}>7</Text></View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1, 
  },

  sub_container_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sub_container_2: {
    flexDirection: 'row',
    
  },

  sub_container_3: {
    flexDirection: 'row',
    
  },

  sub_container_4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txt: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  }
})