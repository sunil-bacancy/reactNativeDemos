import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import moment from 'moment'

export default class LodashDemo extends Component {

    OnText() {
        console.log(moment().format('ZZ'));
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity style={{ backgroundColor: 'orange', height: 35, width: 80, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.OnText()}>
                    <Text>Hello</Text>
                </TouchableOpacity>
            </View>
        )
    }
}






/*
1)  what is difference between all 3 method OUTPUT are same
    const ver = _.differenceBy([1, 2, 3, 4, 5], [1, 2, 3, 6, 7], Math.floor);
    const ver1 = _.difference([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]);
    const ver2 = _.differenceWith([1, 2, 3, 4, 5], [1, 2, 3, 6, 7], _.isEqual)

2)  intersection/ intersectionBy/ intersectionWith

3)  what is difference between all 2 method OUTPUT are same
    const data = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false },
            { 'user': 'pebbles', 'active': true }
        ];
        const ver = _.dropWhile(data, { 'user': 'fred', 'active': false });
        const ver1 = _.dropRightWhile(data, { 'user': 'fred', 'active': false });

4)  pull & pullAll Difference
*/