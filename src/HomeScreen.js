/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 11:14:04 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-06 13:44:48
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './ProfileScreen'
import { UserAction } from './actions'
import Toast from '@remobile/react-native-toast'
class Home extends Component {

	constructor(props){
		super(props)
	}
	
	componentWillMount () {
		const { user, navigation } = this.props
		if(!user.isLoggedIn) {
			navigation.navigate('Login')
		}
	}
	
	componentDidMount() {
		setTimeout(()=>{
			// Toast.show( "this is a message")
			// this.props.dispatch(UserAction.updateUserInfo({isLoggedIn: true}))
		},2000)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>HomeScreen12</Text>
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
		backgroundColor: '#e1aca1',
	},
});
const mapStateToProps = state => ({
	user: state.user,
});

const ConnectHome = connect(mapStateToProps)(Home);
const HomeScreen = TabNavigator({
	Home: {
		screen: ConnectHome,
		navigationOptions: {
			title:"首页",
			header: null,
			headerRight: <Button title="Info" onPress={()=> {}}/>,
			tabBarLabel: '首页',
			headerTintColor: 'blue',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-home' : 'ios-home-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			),
		},
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			title:"我",
			header: null, // 这就先都空着吧
			tabBarLabel: '我',
			headerTintColor: 'blue',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-person' : 'ios-person-outline'}
					size={26}
					style={{ color: tintColor, fontWeight: 'bold' }}
				/>
			),
		},
	}
}, {
		tabBarPosition: 'bottom',
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#e91e63',
		},
		headerMode:"screen"
	});

export default HomeScreen;
