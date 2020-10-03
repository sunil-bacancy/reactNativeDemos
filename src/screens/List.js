import React,{Component} from 'react';
import{ View, FlatList, Text, TouchableOpacity } from 'react-native';
import WeekdayItem from './WeekdayItem'

export default class App extends Component{
  render(){
    const days = [
      { name:'Sunday',
        color:'#f00'},
        { name:'Monday',
        color:'green'},
        { name:'Tuesday',
        color:'blue'},
        { name:'Wednesday',
        color:'yellow'},
        { name:'Thursday',
        color:'pink'},
        { name:'Friday',
        color:'grey'},
        { name:'Saturday',
        color:'cyan'},
     
  ];
    return(
        <View>
          <FlatList
          data={days}
          numColumns={3}
          renderItem={({item})=> <WeekdayItem {...item}/>}
          />

        </View>
    );
  }

}

