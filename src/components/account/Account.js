/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 18:52:36 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-10 15:25:28
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image
} from 'react-native';
import { FaeComponent, FaeAction } from '@faegroup/common'
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
import { updateUserInfo } from '../../actions/user'
class Account extends Component {

	static navigationOptions = () => ({
		title: '账户'
	})

	componentDidMount() {
		// this.props.dispatch(updateUserInfo({isLoggedIn: true}))
		// this.props.dispatch(FaeAction.show_loading( "处理中..."))
		// setTimeout(()=> {
		// 	this.props.dispatch(FaeAction.hide_loading())
		// }, 1000)
	}

	componentWillReceiveProps(nextProps) {
	}

	_onPress = () => {

	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{
					flexDirection: 'row',
					height: 100,
					backgroundColor: _blue,
				}}>
					<View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
						<Image
							style={{ resizeMode: 'contain', width: 40, height: 40, }}
							source={require('../img/portrait.png')}
						/>
					</View>
					<View style={{ flex: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
						<Text style={{ color: 'white' }}>12318458876</Text>
					</View>
					<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						<Image
							style={{ resizeMode: 'contain', width: 20, height: 20 }}
							source={require('../img/arrow-right-white.png')}
						/>
					</View>
				</View>
				<View style={{ marginTop: 20 }}>
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'用款企业'} />
				</View>
				<View style={{ marginTop: 20 }}>
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'个体户'} />
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
