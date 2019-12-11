
import { Item, Input, View, Button, Text } from 'native-base';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { InteractionManager } from "react-native";


class Login extends Component {


    onSubmit() {
        Actions.Home();
    }


    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 40 }}>Welcome</Text>
                        <Text style={{ fontSize: 30 }}>HiringMobile</Text>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 30 }}>
                        <View style={{ marginVertical: 20 }}>
                            <Item rounded style={{ paddingHorizontal: 20 }}>
                                <Input placeholder='Username' />
                            </Item>
                        </View>
                        <View style={{ marginVertical: 20 }}>
                            <Item rounded style={{ paddingHorizontal: 20 }}>
                                <Input placeholder='Password' />
                            </Item>
                        </View>
                        <View>
                            <Button rounded primary style={{ justifyContent: "center" }} onPress={this.onSubmit} >
                                <Text>Sign In</Text>
                            </Button>
                            <Button style={{ justifyContent: "center", backgroundColor: '', elevation: 0 }} >
                                <Text style={{ color: '#0A60FF', textTransform: "lowercase", color: 'blue' }}>Register here</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

export default Login;
