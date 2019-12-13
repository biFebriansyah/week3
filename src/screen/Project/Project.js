import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.test = this.test.bind(this);
    }

    test() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goBack} style={styles.create} onPress={this.test}>
                        <Ionicons name="md-add-circle" size={20} color="#52575D"></Ionicons>
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Create</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conten}>
                    <Text> Project </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 5,
        backgroundColor: '#bbb'
    },
    create: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: '#fff',
        width: 105,
        padding: 5,
        borderRadius: 10,
    },
    conten: {
        flex: 1,
    }
})

const mapStateToProps = state => {
    return {
        dataUser: state.data.userData
    }
}

export default connect(mapStateToProps)(Project)