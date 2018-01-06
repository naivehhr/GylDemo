/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 13:31:31 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-06 11:12:24
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class DetailsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>DetailsScreen</Text>
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

export default DetailsScreen;
