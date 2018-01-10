/*
 * @Author: aran.hu 
 * @Date: 2018-01-10 15:28:51 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-10 16:02:33
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavAction } from '../actions'
import { NavigationActions } from 'react-navigation'
class App extends Component {
	static navigationOptions = ({
		header: null
	})

	componentWillMount() {
		let rootPage = 'UserHome'
		if (this.props.state.user.roleType == 'coreuser') {
			console.log('核心用户登录')
			rootPage = 'CoreUserHome'
		} else if (this.props.state.user.roleType == 'user') {
			console.log('上下游企业用户登录')
			rootPage = 'UserHome'
		} else {
			console.log('未知类型用户登录')
		}
		
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: rootPage })
			]
		})
		this.props.navigation.dispatch(resetAction)
		this.props.dispatch(NavAction.setTopNavigator({ topNavigation: this.props.navigation }))
	}

	render() {
		return (
			<View style={styles.container}>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
