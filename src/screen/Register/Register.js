
import { Item, Input, View, Button, Text, Icon, Picker } from 'native-base';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';


class Registers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: "key1"
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(value) {
        this.setState({
            selected: value
        })
    }


    goLogin() {
        Actions.pop()
    }

    onSubmit() {
        console.log(this.state.selected)
    }

    render() {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 40 }}>Create Account</Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 30 }}>
                        <View style={{ marginTop: 20, marginBottom: 10 }}>
                            <Item inlineLabel style={{}}>
                                <Input placeholder='Username' />
                            </Item>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Item inlineLabel style={{}}>
                                <Input placeholder='Email' />
                            </Item>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Picker
                                style={{ paddingLeft: 20 }}
                                mode="dropdown"
                                iosHeader="Select your SIM"
                                iosIcon={<Icon name="arrow-down" />}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Company" value="key1" />
                                <Picker.Item label="Engineer" value="key2" />
                            </Picker>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 30 }}>
                            <Item inlineLabel style={{}}>
                                <Input placeholder='Password' secureTextEntry={true} />
                            </Item>
                        </View>
                        <View>
                            <Button rounded primary style={{ justifyContent: "center", }} onPress={this.onSubmit} >
                                <Text>submit</Text>
                            </Button>
                            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20 }}>
                                <Text style={{ marginRight: 5 }}>Have Account?</Text>
                                <Text style={{ color: '#0A60FF', textTransform: "lowercase", color: 'blue' }} onPress={this.goLogin}>Login here</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

export default Registers;
