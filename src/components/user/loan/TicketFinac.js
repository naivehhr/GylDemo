/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 20:57:50 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 21:00:12
 */

 //import liraries
 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 
 // create a component
 class TicketFinac extends Component {

	static navigationOptions = {
		tabBarLabel: '商票融资',
	}

	 render() {
		 return (
			 <View style={styles.container}>
				 <Text>TicketFinac</Text>
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
 export default TicketFinac;
 