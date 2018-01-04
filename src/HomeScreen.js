/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 11:14:04 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-04 18:30:52
 */
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Profile from './ProfileScreen'
class Home extends Component {
	render() {
		console.log(this.props)
		return (
			<View style={styles.container}>
				<Text>HomeScreen11111111111</Text>
				<Button
					onPress={() => this.props.navigation.navigate('Profile')}
					title="Go to Profile"
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Details')}
					title="Go to details"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});
const mapStateToProps = state => ({
	state: state,
});

const ConnectHome = connect(mapStateToProps)(Home);
const HomeScreen = TabNavigator({
	Home: {
		screen: ConnectHome,
	},
	Profile: {
		screen: Profile,
	}
}, {
		tabBarPosition: 'bottom',
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#e91e63',
		},
	});

export default HomeScreen;
