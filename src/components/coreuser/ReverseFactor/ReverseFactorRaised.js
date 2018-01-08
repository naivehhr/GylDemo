/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:14:47 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 14:34:56
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ReverseFactorRaised extends Component {
	static navigationOptions = {
		tabBarLabel: '已融资',
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>ReverseFactorRaised</Text>
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
	},
});

//make this component available to the app
export default ReverseFactorRaised;
