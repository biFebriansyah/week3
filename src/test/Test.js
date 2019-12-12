import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Project from '../screen/Project/Project';
import Home from '../screen/Home/Home';

export default class test extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'home',
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange() {

    }

    tabs = [
        {
            key: 'home',
            icon: 'md-home',
            label: 'Home',
            barColor: '#ccc',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'project',
            icon: 'ios-list-box',
            label: 'Project',
            barColor: '#bbb',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'profile',
            icon: 'md-person',
            label: 'Profile',
            barColor: '#CCC',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="black" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        const tab = this.state.activeTab
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {
                        this.state.activeTab === 'home' ?
                            <Home />
                            : this.state.activeTab === 'project' ?
                                <Project />
                                : this.state.activeTab === 'profile' ?
                                    <Text>Hello</Text> : <Text>haii</Text>
                    }
                </View>
                <BottomNavigation
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View >
        )
    }
}