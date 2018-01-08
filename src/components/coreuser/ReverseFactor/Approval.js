/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 16:20:56 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 18:04:41
 */


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
	Line,
	CombineButton,
	SubmitButton,
	SmallSubmitButton
} = FaeComponent
class Approval extends Component {
	static navigationOptions = {
		title: '审批',
	}

	state = {
		text: '审批意见'
	}

	_onPress() {
		// this.props.navigation.navigate('Approval')
	}
	_submit = () => {

	}

	render() {
		// let _view = () => {
		// 	return (
		// 		<View>
		// 			<Line />
		// 			<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
		// 				<View style={{ flex: 1 }}>
		// 					<Text style={{ fontSize: 16 }} >单据编号</Text>
		// 				</View>
		// 				<View style={{ flex: 2 }}>
		// 					<Text style={{ fontSize: 16 }} >646545645</Text>
		// 				</View>
		// 			</View>
		// 		</View>
		// 	)
		// }
		return (
			<ScrollView style={styles.container}>
				<View style={{ backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>单据信息</Text>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >单据编号</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >646545645</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >单据金额(元)</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >1000,112</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >单据起始日</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >2018-01-01</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >单据到期日</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >2019-01-01</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >核心企业名称</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >网信集团</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>融资信息</Text>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 10 }}>
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
							<Text style={{ fontSize: 16 }} >95天</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资利率</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >6.56%</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >融资利息</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >10,000.00</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >可到账金额</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >990,000.00</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>合同</Text>
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'债权转让协议'} />
					<Line />
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'平安银行服务协议'} />
					<Line />
				</View>
				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>融资方信息</Text>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >企业名称</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >山东精密股份公司</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >行业</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >零售业</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >营业执照号码</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >5645465465456</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>证照信息</Text>
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'营业执照'} />
				</View>
				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>授信协议</Text>
					<CombineButton onPress={this._onPress.bind(this, 'yonghuxieyi')} leftText={'债权转让协议'} />
				</View>
				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>审批说明</Text>
					<TextInput
						underlineColorAndroid={'transparent'}
						style={{ marginLeft: 15, width: W - 30, height: 100, borderColor: 'gray', borderWidth: .5 }}
						onChangeText={(text) => this.setState({ text })}
						value={this.state.text}
						multiline={true}
						numberOfLines={4}
					/>
					<View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{
							width: 120,
						}}>
							<Button
								title='拒绝用款'
								onPress={this._submit} />
						</View>
						<View style={{
							width: 120,
						}}>
							<Button
								title='同意用款'
								onPress={this._submit} />
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Approval;
