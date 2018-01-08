/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 10:20:25 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 13:57:01
 */

 //import liraries
 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 
 // create a component
 class UserHome extends Component {
	 render() {
		 return (
			 <View style={styles.container}>
				 <Text>UserHome</Text>
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
 export default UserHome;
 