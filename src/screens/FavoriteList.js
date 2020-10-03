import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import AppImages from '../image'
import FavoriteItemFun from '../components/FavoriteItemFun';
import FavoriteItemClass from '../components/FavoriteItemClass';


const DATA = [
    {
        id: 1,
        image: source = (AppImages.stomatology),
        name: 'Stomatology',
        color: '#fcb502',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 2,
        image: source = (AppImages.ophthalmology),
        name: 'Ophthalmology',
        color: '#ff5a01',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 3,
        image: source = (AppImages.neurology),
        name: 'Neurology',
        color: '#fe352a',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 4,
        image: source = (AppImages.surgery),
        name: 'Surgery',
        color: '#0b51d2',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 5,
        image: source = (AppImages.stomatology),
        name: 'Stomatology',
        color: '#fcb502',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 6,
        image: source = (AppImages.ophthalmology),
        name: 'Ophthalmology',
        color: '#ff5a01',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 7,
        image: source = (AppImages.neurology),
        name: 'Neurology',
        color: '#fe352a',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },
    {
        id: 8,
        image: source = (AppImages.surgery),
        name: 'Surgery',
        color: '#0b51d2',
        dec: "Lorem ipsum dolor sit amet,",
        dec2: "vis no is erroribus  hendreit.",
    },

]
export default class FavoriteList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: DATA }
    }

    getUpdatedData = (data) => {
        console.log('data', data);
        this.setState({ data })

    }

    renderClassItem = ({ item }) =>
        <FavoriteItemClass item={item} data={this.state.data} onUpdateList={(data) => this.getUpdatedData(data)} />
    renderFuncItem = ({ item }) =>
        <FavoriteItemFun {...item} onDelete={() => this.onDelete(item)} />
    onDelete = ({ id }) => {
        let { data } = this.state;
        data = data.filter(({ id: itemId }) => itemId != id)
        this.setState({ data })
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(index) => index.toString()}
                    renderItem={this.renderClassItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#044' }
})
