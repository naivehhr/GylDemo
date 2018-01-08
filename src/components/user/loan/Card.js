/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 20:26:55 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 21:01:49
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
} = FaeComponent
class Card extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{
					flex: 1,
					width: W,
					marginLeft: 5,
					marginTop:10,
					flexDirection: 'row',
					justifyContent: 'flex-start'
				}}>
					<Text>单据编号：</Text>
					<Text>352627367</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flexDirection: 'row', flex: 2 }}>
						<View style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'flex-start',
							marginLeft: 15,
						}}>
							<Text style={{ padding: 8, fontSize: 16, color: 'red' }}>100,000,000</Text>
							<Text style={{ padding: 8, fontSize: 14 }}>单据金额(元)：</Text>
						</View>
						<View style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'flex-start',
						}}>
							<Text style={{ padding: 8, fontSize: 16,}}>2018-01-01</Text>
							<Text style={{ padding: 8, fontSize: 14 }}>单据到期日</Text>
						</View>
					</View>
					<View style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<Button title='申请融资' onPress={() => { }} />
					</View>
				</View>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
});

//make this component available to the app
export default Card;
