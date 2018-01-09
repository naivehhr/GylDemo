/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 14:22:37 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-09 14:22:37 
 */

 //import liraries
 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 
 // create a component
 class LoanOrderRaising extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: '募集中',
	});
	 render() {
		 return (
			 <View style={styles.container}>
				 <Text>LoanOrderRaising</Text>
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
 export default LoanOrderRaising;
 