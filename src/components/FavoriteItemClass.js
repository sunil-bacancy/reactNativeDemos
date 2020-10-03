import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

export default class FavoriteItemClass extends Component {
    constructor(props) {
        super(props);

        this.state = { item: props.item }
    }

    componentDidMount = () => {
        console.log('props===', this.props.item)
    }

    onDelete = () => {
        let { data, item: { id }, onUpdateList } = this.props
        data = data.filter((child) => child.id != id)
        onUpdateList(data)
    }
    render() {
        const { name, color, image, dec, dec2, ...rest } = this.state.item;
        return (
            <TouchableOpacity style={[styles.container, { backgroundColor: 'white' }]}>
                <Image
                    resizeMode={'cover'}
                    style={styles.imageStyle}
                    source={image} />
                <View style={{ marginLeft: 12 }}>
                    <Text style={[styles.textNameStyle, { color: color }]}>{name}</Text>
                    <Text style={[styles.textDescStyle, { color: '#555' }]}>{dec}</Text>
                    <Text style={[styles.textDescStyle, { color: '#555' }]}>{dec2}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.onDelete} style={[styles.buttonParent, { backgroundColor: color }]}>
                        <Text style={[styles.textNameStyle, { color: '#fff' }]}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 12,
        padding: 12,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: 'transparent'
    },
    textNameStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    textDescStyle: {
        fontSize: 12
    },
    imageStyle: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    buttonParent: {
        borderRadius: 6,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingHorizontal: 4,
        paddingVertical: 4

    }
})