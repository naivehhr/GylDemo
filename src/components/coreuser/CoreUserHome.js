/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 10:19:10 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-10 16:02:22
 */

//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	Image,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform
} from 'react-native';
import RefreshView from '../common/RefreshView'
import { NavAction, UserAction } from '../../actions'

import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
} = FaeComponent

class CoreUserHome extends Component {

	static navigationOptions = ({ navigation, screenProps }) => ({
		// title: '',
		header: null,
		// headerStyle: {backgroundColor: '#37D2F1'},
		// headerLeft: <Button title="我的" onPress={() => { }} />,
		// headerRight: <Button title="通知" onPress={() => { }} />,
	});
	
	state = {
		refreshing: false
	}

	componentDidMount() {
		this.props.dispatch(UserAction.updateUserInfo({roleType: 'user'}))
	}

	onRefreshFun = () => {

	}

	_onPressButton = (type) => {
		return event => {
			const { navigation } = this.props
			switch (type) {
				case 'fxbl':
					navigation.navigate('ReverseFactor')
					break;
				default:
			}
		}
	}

	_renderItem = () => {
		let TouchBar = Platform.OS == 'ios' ? TouchableOpacity : TouchableNativeFeedback
		return (
			<View>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => { }} >
						<Image
							style={styles.icon}
							source={require('../../components/img/me.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { }} >
						<Image
							style={styles.icon}
							source={require('../../components/img/notification.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.top}>
					<View style={styles.money}>
						<Text style={{
							color: 'white',
							fontSize: 18,
						}}>1000,0000,000</Text>
						<Text style={{
							marginTop: 10,
							color: 'white',
							fontSize: 16,
						}}>代还本金(元)</Text>
					</View>
					<Image
						style={{height: 130, width: 5}}
						source={require('../../components/img/xuxian.png')}
					/>
					<View style={styles.money}>
						<Text style={{
							color: 'white',
							fontSize: 18,
						}}>1000,0000,000</Text>
						<Text style={{
							marginTop: 10,
							color: 'white',
							fontSize: 16,
						}}>待还利息(元)</Text>
					</View>
				</View>
				<TouchBar
					activeOpacity={0.8}
					onPress={this._onPressButton('fxbl')}>
					<View style={{
						flexDirection: 'row',
						marginTop: 20,
						height: 120,
						backgroundColor: 'white',
						padding: 15,
						justifyContent: 'space-between',
					}}>
						<View style={{
							justifyContent: 'center',
							alignContent: 'center'
						}}>
							<Text style={{ fontSize: 16 }}>
								反向保理
							</Text>
						</View>
						<View style={{
							justifyContent: 'center',
							alignContent: 'center'
						}}>
							<Image
								style={styles.icon}
								source={require('../../components/img/enter.png')}
							/>
						</View>
					</View>
				</TouchBar>

				<TouchBar
					activeOpacity={0.8}
					onPress={this._onPressButton}>

					<View style={{
						flexDirection: 'row',
						marginTop: 20,
						height: 120,
						backgroundColor: 'white',
						padding: 15,
						justifyContent: 'space-between'
					}}>
						<View style={{
							justifyContent: 'center',
							alignContent: 'center'
						}}>
							<Text style={{ fontSize: 16 }}>商票融资</Text>
						</View>
						<View style={{
							justifyContent: 'center',
							alignContent: 'center'
						}}>
							<Image
								style={styles.icon}
								source={require('../../components/img/enter.png')}
							/>
						</View>
					</View>
				</TouchBar>

			</View>
		)
	}
	
	render() {
		return (
			<View style={styles.container}>
				{/* <RefreshFlatList
					renderItem={this._renderItem}
					viewType={'ScrollView'}
					onRefreshFun={this.onRefreshFun}
					isRefresh={this.state.refreshing}
					style={{ backgroundColor: 'red' }}
				/> */}
				<RefreshView
					renderItem={this._renderItem}
					viewType={'ScrollView'}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon: {
		height: 30,
		width: 30
	},
	header: {
		paddingTop: Platform.OS == 'IOS' ? 30 : 25,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: W,
		backgroundColor: '#2DB7F5'
	},
	top: {
		flexDirection: 'row',
		height: 150,
		width: W,
		backgroundColor: '#2DB7F5'
	},
	money: {
		width: W / 2,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

//make this component available to the app
export default CoreUserHome;
