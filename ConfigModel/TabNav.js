/*
 * @Author: aran.hu 
 * @Date: 2018-01-16 18:18:39 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-16 18:18:39 
 */

 //import liraries
 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 
 // create a component
 class TabNav extends Component {
	 render() {
		 return (
			 <View style={styles.container}>
				 <Text>TabNav</Text>
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
 export default TabNav;
 