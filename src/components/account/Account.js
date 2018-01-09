/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 18:52:36 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 20:04:23
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';
import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
	Line,
	CombineButton,
	SubmitButton,
	SmallSubmitButton
} = FaeComponent
import {
	_blue
} from '../common/colors'
class Account extends Component {

	static navigationOptions = () => ({
		title: '账户'
	})
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{
					flexDirection: 'row',
					height: 100,
					backgroundColor: _blue,
				}}>
					<View style={{ flex: 4, backgroundColor: 'red' }}>
					</View>
					<View style={{ flex: 10, backgroundColor: 'blue' }}>
					</View>
					<View style={{ flex: 3, backgroundColor: 'yellow' }}>
					</View>
					<View>
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'债权转让协议'} />

					</View>
				</View>
			</ScrollView>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

//make this component available to the app
export default Account;
