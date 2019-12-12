import { Item, Input, View, Button, Text, Label, Image } from 'native-base';
import { StyleSheet } from 'react-native'
import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

class Engineer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            container: style.container,
            container2: style.hide,
            photo: null
        }
        this.onSave = this.onSave.bind(this)
        this.onBack = this.onBack.bind(this)
        this.onChoosePhoto = this.onChoosePhoto.bind(this)
    }

    onSave() {
        this.setState({
            container: style.hide,
            container2: style.container2
        })
    }
    onBack() {
        this.setState({
            container: style.container,
            container2: style.hide,
        })
    }
    onChoosePhoto() {
        console.log('masuk');
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    }
    render() {
        const photo = this.state.photo;

        return (
            <>
                <View style={this.state.container}>
                    <View style={style.containerText}>
                        <Text>Engineer Form</Text>
                    </View>
                    <View style={style.containerInput}>
                        <Item stackedLabel style={style.item}>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel style={style.item}>
                            <Label>Location</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel style={style.item}>
                            <Label>Job</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel style={style.item}>
                            <Label>Project Total</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel style={style.item}>
                            <Label>Project Finished</Label>
                            <Input />
                        </Item>
                    </View>
                    <View style={style.containerBtn}>
                        <Button style={{ justifyContent: 'center' }} onPress={this.onSave}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </View>
                <View style={this.state.container2}>
                    <View style={style.titleBar}>
                        <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={this.onBack}></Ionicons>
                        <Ionicons name="md-more" size={24} color="#52575D" style={{ display: 'none' }}></Ionicons>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        {photo && (
                            <Image
                                source={{ uri: photo.uri }}
                                style={{ width: 300, height: 300 }}
                            />
                        )}
                        <MaterialIcons name="camera-front" size={40} color="#DFD8C8" onPress={this.onChoosePhoto}></MaterialIcons>
                        <Text style={{ color: '#bbb' }}>Choose Photo</Text>
                    </View>
                    <View style={{ height: 100 }}>
                        <Button rounded style={{ backgroundColor: '#bbb' }} onPress={this.onChoosePhoto}>
                            <Text>Save</Text>
                        </Button>
                    </View>
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    hide: {
        display: 'none'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    titleBar: {
        alignSelf: 'stretch',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    containerInput: {
        flex: 3,
        paddingHorizontal: 20
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
    },
    containerBtn: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    item: {
        marginBottom: 10
    }

})

export default Engineer