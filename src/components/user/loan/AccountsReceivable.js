/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 20:58:51 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 21:00:37
 */


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class AccountsReceivable extends Component {

	static navigationOptions = {
		tabBarLabel: '应收账款',
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>AccountsReceivable</Text>
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
export default AccountsReceivable;
