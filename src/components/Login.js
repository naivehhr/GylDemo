/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 11:14:04 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-05 15:55:48
 */
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput
} from 'react-native';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Useless Placeholder' };
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Login</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
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



