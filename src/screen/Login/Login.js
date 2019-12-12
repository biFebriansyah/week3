
import { Item, Input, View, Button, Text, Label } from 'native-base';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';


class Login extends Component {

    onSubmit() {
        Actions.Home();
    }

    goRegis() {
        Actions.Register()
    }
    render() {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 40 }}>Welcome</Text>
                        <Text style={{ fontSize: 20 }}>Hiring Mobile</Text>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 40 }}>
                        <View style={{ marginTop: 20, marginBottom: 10 }}>
                            <Item floatingLabel >
                                <Label>Username</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 40 }}>
                            <Item floatingLabel >
                                <Label>Password</Label>
                                <Input secureTextEntry={true} />
                            </Item>
                        </View>
                        <View>
                            <Button rounded primary style={{ justifyContent: "center", }} onPress={this.onSubmit} >
                                <Text>Sign In</Text>
                            </Button>
                            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20 }}>
                                <Text style={{ marginRight: 5 }}>Don't Have Account?</Text>
                                <Text style={{ color: '#0A60FF', textTransform: "lowercase", color: 'blue' }} onPress={this.goRegis}>Register here</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

export default Login;
