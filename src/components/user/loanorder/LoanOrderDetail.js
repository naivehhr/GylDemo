/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 13:44:45 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 15:47:04
 */


//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';
import { FaeComponent } from '@faegroup/common'
const {
	W,
	H,
	Line,
	CombineButton,
	SubmitButton,
	SmallSubmitButton,
	LinkLabel,
	color_text_grey
 } = FaeComponent

class LoanOrderDetail extends Component {
	static navigationOptions = () => ({
		title: '订单详情'
	})
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{ backgroundColor: 'white' }}>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20,
						marginLeft: 5,
						marginRight: 5,
						height: 40,
					}}>
						<Text style={{}}>订单编号：20180103000000001</Text>
						<Text style={{ color: '#2DB7F5' }}>{`内部审核中`}</Text>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资金额(元)</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >1,000,000</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资到期日</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >2018-03-01</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资天数</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >59天</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资利率</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >1%</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资利息</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >1,000</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >可到账金额</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >999,000</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 10, alignItems: 'center' }}>
					<Text style={{color: '#ff7f50'}}>
						融资到账金额以实际成交金额为准
					</Text>
				</View>
			</ScrollView >
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
export default LoanOrderDetail;
