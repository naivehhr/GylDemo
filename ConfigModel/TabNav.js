/*
 * @Author: aran.hu 
 * @Date: 2018-01-16 18:18:39 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-17 17:43:36
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonComponent from './CommonComponent'
import { TabNavigator, TabBarTop } from 'react-navigation';
import { getPage } from './GetPage1'

function getComponent(){
	return class extends Component {
		render() {
			console.log('getComponent', this.props)
			return (
				<CommonComponent screenProps={this.props.screenProps}/>
			);
		}
	}
}


const TabNav = TabNavigator({
	all: { 
		screen: getComponent(),
		navigationOptions: ({navigtation}) => ({
			title: 'all'
		})
	},
}, {
		tabBarPosition: 'top',
		animationEnabled: true,
		swipeEnabled: true,
		tabBarComponent: TabBarTop,
		tabBarOptions: {
			scrollEnabled: true,
			tabStyle: {
				width: 200,
			},
		}
	});

export default TabNav;
