import React from 'react';
import{ View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default (item) => <View style={[styles.mainContainer, {}]}>
<View style={styles.subContainer}>
<Text style={[styles.textStyle, {color:item.color,}]}>{item.name.charAt(0)}</Text>
</View>
 <View>
 <Text style={{color:'#fff'}}>{item.name}</Text>
 <Text style={{color:'#fff'}}>{item.name}</Text>
 <Text style={{color:'#fff'}}>{item.name}</Text>
   </View>
    <View style={{flex:1}}/> 
   <View>
     <TouchableOpacity style={{ borderRadius:4, borderColor:'#fff', borderWidth:3, paddingVertical:4, paddingHorizontal:8, backgroundColor:'#fff' }} onPress={()=> alert(`${item.name} Pressed`)}>
       <Text>
         Click
       </Text>
     </TouchableOpacity>
     </View>
</View>

const styles = StyleSheet.create({
  mainContainer : {
    
    padding:6,
    borderBottomColor:'#cbcbcb',
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
  }, 

  subContainer : {
    backgroundColor:'#fff',
    marginHorizontal:8,
    height:28,
    width:28,
    alignItems:'center',
    borderRadius:15,
  },

  textStyle : {
    
    fontWeight:'bold',
    fontSize:20,
    paddingHorizontal:4,
  }
})