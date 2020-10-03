import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import AppImages from '../image';
// import ExtStyle from '../style/DesignFlatlistStyle';

const DATA = [
    {
        image: source = (AppImages.stomatology),
        name: 'Stomatology',
        color: '#fcb502',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        image: source = (AppImages.ophthalmology),
        name: 'Ophthalmology',
        color: '#ff5a01',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        image: source = (AppImages.neurology),
        name: 'Neurology',
        color: '#fe352a',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        image: source = (AppImages.surgery),
        name: 'Surgery',
        color: '#0b51d2',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    }, {
        image: source = (AppImages.stomatology),
        name: 'Stomatology',
        color: '#fcb502',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        image: source = (AppImages.ophthalmology),
        name: 'Ophthalmology',
        color: '#ff5a01',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        image: source = (AppImages.neurology),
        name: 'Neurology',
        color: '#fe352a',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        image: source = (AppImages.surgery),
        name: 'Surgery',
        color: '#0b51d2',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },

]

export default class DesignFlatlist extends Component {

    onItemDelete = (ind) => {
        alert('Index: ' + ind)
    }
    render() {
        // console.log(ExtStyle.contain)

        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>Online Doctor Specialities</Text>
                </View>
                <View style={styles.searchViewStyle}>
                    <View style={{ width: "73%" }}>
                        <TextInput style={styles.searchStyle}
                            placeholder={'Search'}
                            placeholderTextColor={'#ebe9ff'}>
                        </TextInput>
                    </View>
                    <View style={styles.editStyle}>
                        <TouchableOpacity onPress={() => alert('Pressed on Edit')} style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#fcb502' }}>Edit</Text>
                            <Image style={styles.editImageStyle} source={AppImages.arrow}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(index) => index.toString()}
                        // numColumns = {1}
                        renderItem={({ item, index }) =>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <View style={styles.imageContainer}>
                                    <Image source={item.image} style={styles.imageStyle}></Image>
                                </View>
                                <View style={{ paddingLeft: 40 }}>
                                    <Text style={[styles.titleStyle, { color: item.color, textAlign: 'center', marginTop: 15 }]}>{item.name}</Text>
                                    <Text style={{ color: '#0b51d2', fontSize: 12 }}>{item.dec}</Text>
                                    <Text style={{ color: '#0b51d2', fontSize: 12 }}>{item.dec2}</Text>
                                    <View style={styles.btnViewStyle}>
                                        <TouchableOpacity onPress={() => this.onItemDelete(index)}

                                            style={[styles.btnStyle, { backgroundColor: item.color }]}>
                                            <Text style={{ color: 'white', }}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 20,
    },

    headerStyle: {
        alignItems: 'center',
        marginTop: 15,
    },

    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0b51d2',
    },

    searchViewStyle: {
        flexDirection: 'row',
        // justifyContent : 'center',
        marginVertical: 20
    },

    searchStyle: {
        // borderWidth : 1,
        borderRadius: 25,
        backgroundColor: '#0b51d2',
        paddingHorizontal: 15,
        height: 40,
    },

    editStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor : 'red'
    },

    editImageStyle: {
        height: 13,
        width: 13,
        // backgroundColor : 'red',
        marginVertical: 4,
        marginHorizontal: 5,
    },

    detailContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    imageStyle: {
        height: 90,
        width: 90,
        marginVertical: 16,
        borderWidth: 1,
        borderColor: 'black',
        // backgroundColor : 'red'
    },

    titleStyle: {
        fontWeight: 'bold',
        alignItems: 'center'
    },

    btnStyle: {
        height: 30,
        width: 75,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },

    btnViewStyle: {
        alignItems: 'center',
    },

})