import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import AppImages from '../image';

const [DASHBOARD, LIST, LOGIN, FLEXLAYOUT1, FLEXLAYOUT2, CHESSBOARD] = [0, 1, 2, 3, 4, 5];
const DRAWER = [
    {
        id: 0,
        name: 'Dashboard',
        screenName: 'Dashboard',
        image: AppImages.username_icon,
    },
    {
        id: 1,
        name: 'List',
        screenName: 'List',
        image: AppImages.password_icon,
    },
    {
        id: 2,
        name: 'Login',
        screenName: 'Login',
        image: AppImages.phone_icon,
    },
    {
        id: 3,
        name: 'FlexLayout1',
        screenName: 'FlexLayout1',
        image: AppImages.username_icon,
    },
    {
        id: 4,
        name: 'FlexLayout2',
        screenName: 'FlexLayout2',
        image: AppImages.password_icon,
    },
    {
        id: 5,
        name: 'ChessBoard',
        screenName: 'ChessBoard',
        image: AppImages.phone_icon,
    }
]

class DrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    onPressTab = (item) => {
        console.log('props', this.props)
        const { navigation } = this.props;
        switch (item.id) {
            case DASHBOARD:
                navigation.navigate(item.screenName)
            case LIST:
                navigation.navigate(item.screenName);
                break;
            case LOGIN:
                navigation.navigate(item.screenName);
                break;
            case FLEXLAYOUT1:
                navigation.navigate(item.screenName);
                break;
            case FLEXLAYOUT2:
                navigation.navigate(item.screenName);
                break;
            case CHESSBOARD:
                navigation.navigate(item.screenName);
                break;
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, }}>
                <View style={{ backgroundColor: 'green', height: "20%", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Menu</Text>
                </View>
                <FlatList
                    data={DRAWER}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this.onPressTab(item)}
                                    style={{ flexDirection: 'row', backgroundColor: 'white', marginVertical: 7, marginHorizontal: 10, }}>
                                    <Image source={item.image} style={{ height: 20, width: 20 }}></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

export default withNavigation(DrawerComponent);

const styles = StyleSheet.create({

})