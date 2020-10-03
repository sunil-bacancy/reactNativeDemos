import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={false} onPress={()=>alert('Hey you pressed on text')}>
      
      <Image
      style={{height:100, width:100}}
      source={{uri:'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg'}} />
      </TouchableOpacity>
      
      <Text onPress={()=>alert('Directly access')}>Press here</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});