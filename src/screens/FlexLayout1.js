import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FlexLayout1 extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sub_container_1}>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'red' }}><Text style={styles.txt}>1</Text></View>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'green' }}><Text style={styles.txt}>2</Text></View>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'blue' }}><Text style={styles.txt}>3</Text></View>
        </View>
        <View style={styles.sub_container_2}>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'yellow' }}><Text style={styles.txt}>4</Text></View>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'pink' }}><Text style={styles.txt}>5</Text></View>
        </View>
        <View style={styles.sub_container_3}>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'grey' }}><Text style={styles.txt}>6</Text></View>
        </View>
        <View style={styles.sub_container_4}>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'magenta' }}><Text style={styles.txt}>7</Text></View>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'navy' }}><Text style={styles.txt}>8</Text></View>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'orangered' }}><Text style={styles.txt}>9</Text></View>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'springgreen' }}><Text style={styles.txt}>10</Text></View>
        </View>
        <View style={styles.sub_container_5}>
          <View style={{ height: 70, flex: 1, justifyContent: 'center', backgroundColor: 'mediumturquoise' }}><Text style={styles.txt}>11</Text></View>
        </View>
        <TouchableOpacity style={{ margin: 32, alignItems: 'center', padding: 8, backgroundColor: '#333' }} onPress={() => this.props.navigation.navigate('DrawerStackNavigator')}>
          <Text style={{ color: '#eee' }}>Open Drawer Navigator</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25
  },

  sub_container_1: {
    flexDirection: 'row'
  },

  sub_container_2: {
    flexDirection: 'row'
  },

  sub_container_3: {
    flexDirection: 'row'
  },

  sub_container_4: {
    flexDirection: 'row'
  },

  sub_container_5: {
    flexDirection: 'row'
  }
})
