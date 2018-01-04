/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 11:14:07 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-04 11:14:07 
 */
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ProfileScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>ProfileScreen</Text>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});

//make this component available to the app
export default ProfileScreen;
