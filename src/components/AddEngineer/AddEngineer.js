import { Item, Input, View, Button, Text, Icon, Picker } from 'native-base';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

class Engineer extends Component {

    render() {
        return (
            <>
                <View>
                    <View>
                        <Text>Engineer Form</Text>
                    </View>
                    <View>
                        <Item rounded>
                            <Input placeholder='Name' />
                        </Item>
                        <Item rounded>
                            <Input placeholder='Location' />
                        </Item>
                        <Item rounded>
                            <Input placeholder='Basic on ' />
                        </Item>
                        <Item rounded>
                            <Input placeholder='Total Project ' />
                        </Item>
                        <Item rounded>
                            <Input placeholder='Project Finished ' />
                        </Item>
                    </View>
                </View>
            </>
        )
    }
}

export default Engineer