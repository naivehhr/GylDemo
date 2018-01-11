/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 15:49:32 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-11 16:23:48
 */

//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
	Button,
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
	color_text_grey,
	CombTextInput
 } = FaeComponent
import UploadImg from './common/UploadImg'
class Register extends Component {
	static navigationOptions = () => ({
		title: '注册',
	})

	state = {
		companyName: '企业名称',
		organizationCode: '组织机构代码',
		agentName: '代理人姓名',
		countName: '开户名称',
		cardNum: '银行卡号',
		openBankName: '开户行',
		bankContactCode: '银行联行号',
		agree: true
	}

	_validate(value, type) {
		switch (type) {
			case 'name':
				this.setState({ name: value })
				break;
			case 'idCard':
				this.setState({ idCard: value })
				break;
			case 'agree':
				this.setState({ agree: value })
				break;
		}
	}

	goToContract() {

	}

	_submit = () => {

	}
	render() {
		const {
			agree,
			companyName,
			organizationCode,
			countName,
			cardNum,
			openBankName,
			bankContactCode
		 } = this.state

		let img
		if (agree) {
			img = require('./img/gouxuan.png')
		} else {
			img = require('./img/weigouxuan.png')
		}
		let contractsView = [];
		contractsView = ['供应链平台服务协议'].map((item, index) => {
			return <LinkLabel key={index} textMsg={`《${item}》`} _onPress={this.goToContract.bind(this, item)} />
		})
		return (
			<ScrollView style={styles.container}>
				<View style={{ backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10 }}>
					<Text>请按要求提交资料，并保证所有图片清晰可辨，认证通过后即可使用平台服务。</Text>
				</View>
				<View style={{ backgroundColor: 'white', marginTop: 10 }}>
					<View style={{ padding: 5, paddingTop: 10 }}>
						<Text>营业执照信息</Text>
					</View>
					<View style={{ padding: 15, paddingTop: 10 }}>
						<CombTextInput
							textLeft={'企业名称'}
							maxLength={20}
							onChangeText={(text) => { this._validate(text, 'companyName') }}
							placeholder={'请输入企业名称'}
							customerTextLeftStyle={{ width: 100, }}
							customerInputStyle={{}} />
						<Line />
						<CombTextInput
							textLeft={'组织机构代码'}
							maxLength={20}
							onChangeText={(text) => { this._validate(text, 'organizationCode') }}
							placeholder={'请输入组织机构代码'}
							customerTextLeftStyle={{ width: 100, }}
							customerInputStyle={{}}
						/>
						<Line />
						<View style={{ marginTop: 10, marginBottom: 10 }}><Text>营业执照照片</Text></View>
						<UploadImg msg={'请确保图片清晰可辨'} />
					</View>
				</View>
				<View style={{ backgroundColor: 'white', marginTop: 10 }}>
					<View style={{ padding: 5, paddingTop: 10 }}>
						<Text>代理人信息</Text>
					</View>
					<View style={{ padding: 15, paddingTop: 10 }}>
						<View>
							<View>
								<Text>代理人手机号码</Text>
							</View>
							<View style={{ marginTop: 5 }}>
								<Text>12213521266</Text>
							</View>
							<Line />
						</View>
						<CombTextInput
							textLeft={'代理人姓名'}
							maxLength={20}
							onChangeText={(text) => { this._validate(text, 'agentName') }}
							placeholder={'请输入代理人姓名'}
							customerTextLeftStyle={{ width: 100, }}
							customerInputStyle={{}} />
						<Line />
						<View style={{ paddingTop: 10 }}>
							<Text>代理人身份证照片</Text>
						</View>
						<View style={{height: 10}}/>
						<UploadImg msg={'正面\n请确保图片清晰可辨'} />
						<View style={{height: 10}}/>
						<UploadImg msg={'反面\n请确保图片清晰可辨'} />
						<View style={{ marginTop: 10 }}>
							<UploadImg msg={'手持身份证照片\n请确保图片清晰可辨'} />
						</View>
					</View>
				</View>
				<View style={{ backgroundColor: 'white', marginTop: 10 }}>
					<View style={{ padding: 5, paddingTop: 10 }}>
						<View><Text>银行账户信息</Text></View>
						<View style={{ padding: 10, paddingTop: 10 }}>
							<CombTextInput
								textLeft={'开户名称'}
								maxLength={20}
								onChangeText={(text) => { this._validate(text, 'countName') }}
								placeholder={'请输入开户名称'}
								customerTextLeftStyle={{ width: 100, }}
								customerInputStyle={{}} />
							<Line />
							<CombTextInput
								textLeft={'银行卡号'}
								maxLength={20}
								onChangeText={(text) => { this._validate(text, 'cardNum') }}
								placeholder={'请输入银行卡号'}
								customerTextLeftStyle={{ width: 100, }}
								customerInputStyle={{}} />
							<Line />
							<CombTextInput
								textLeft={'开户行'}
								maxLength={20}
								onChangeText={(text) => { this._validate(text, 'openBankName') }}
								placeholder={'请输入开户行'}
								customerTextLeftStyle={{ width: 100, }}
								customerInputStyle={{}} />
							<Line />
							<CombTextInput
								textLeft={'银行联行号'}
								maxLength={20}
								onChangeText={(text) => { this._validate(text, 'bankContactCode') }}
								placeholder={'请输入银行联行号'}
								customerTextLeftStyle={{ width: 100, }}
								customerInputStyle={{}} />
							<Line />
						</View>
					</View>
				</View>
				{
					contractsView.length > 0
						?
						<View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, marginBottom: 10, paddingHorizontal: 15 }}>
							<TouchableOpacity onPress={this._validate}>
								<Image source={img} />
							</TouchableOpacity>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
								<Text style={{ marginLeft: 10, fontSize: 12, color: color_text_grey }}>我已仔细阅读并同意 </Text>
								{contractsView}
							</View>
						</View>
						:
						null
				}
				<View style={{
					width: W - 30,
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					paddingBottom: 20
				}}>
					<View style={{
						width: 220,
					}}>
						<Button
							title='提交'
							onPress={this._submit} />
					</View>
				</View>
			</ScrollView>
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
export default Register;
