import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'

export default class CameraGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageFile: '',
            // [],
        }
    }

    OpenCamera = () => {
        ImagePicker.openCamera({
            height: 600,
            width: 600,
            cropping: true,
            mediaType: 'photo',
            // freeStyleCropEnabled: true,
            cropperCircleOverlay: true
            // enableRotationGesture: true,
        }).then((response) => {
            // console.log('response', response)
            this.setState({ imageFile: response.path })
        }).catch(err => {
            console.log('err', err)
        })
    }

    OpenGallery = () => {
        ImagePicker.openPicker({
            height: 100,
            width: 100,
            // cropping: true,
            mediaType: 'photo',
            // multiple: true,
        }).then((response) => {
            // let arr = [];
            // response.map((data, key) => {
            //     arr.push(data.path)
            // })
            this.setState({ imageFile: response.path })
        }).catch(err => {
            console.log('err', err)
        })
    }

    render() {
        const { imageFile } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* {imageFile.length !== 0 && imageFile.map((data, key) => {
                    return ( */}
                <Image style={{ height: 200, width: 200 }} resizeMode={'contain'} source={{ uri: imageFile }} />
                {/* )
                })} */}

                <TouchableOpacity onPress={() => this.OpenCamera()} style={{ backgroundColor: 'blue', height: 35, justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Open Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.OpenGallery()} style={{ backgroundColor: 'green', marginTop: 10, height: 35, justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Open Gallery</Text>
                </TouchableOpacity>
            </View >
        )
    }
}