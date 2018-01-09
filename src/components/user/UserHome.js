/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 10:20:25 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 15:24:19
 */

//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
	Image
} from 'react-native';
import { NavAction } from '../../actions'
import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
} = FaeComponent
import RefreshView from '../common/RefreshView'
const TouchBar = Platform.OS == 'ios' ? TouchableOpacity : TouchableNativeFeedback

class UserHome extends Component {

	static navigationOptions = ({ navigation, screenParops }) => ({
		header: null
	})

	componentDidMount() {
		this.props.dispatch(NavAction.setTopNavigator({ topNavigation: this.props.navigation }))
	}

	_renderItem = () => {
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
						}}>信用额度(元)</Text>
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
								我要用款
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
							<Text style={{ fontSize: 16 }}>用款订单</Text>
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
	_onPressButton = (type) => {
		return event => {
			const { navigation } = this.props
			switch (type) {
				case 'fxbl':
					navigation.navigate('LoanOrder')
					break;
				default:
			}
		}
	}


	render() {
		return (
			<View style={styles.container}>
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
		height: 150,
		width: W,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2DB7F5'
	},
	money: {
		width: W / 2,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

//make this component available to the app
export default UserHome;
