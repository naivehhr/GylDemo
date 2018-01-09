/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 21:02:53 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 14:38:30
 */

//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	Button,
	Image,
	TouchableOpacity
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
class FinancingCconfirm extends Component {
	static navigationOptions = {
		title: '融资确认'
	}

	state = {
		text: '',
		agree: false
	}

	_submit = () => {

	}

	_onPress() {

	}

	_validate = () => {
		const { agree } = this.state
		this.setState({ agree: !agree })
	}

	goToContract() {

	}

	render() {
		const { agree } = this.state
		let img
		if (agree) {
			img = require('../../img/gouxuan.png')
		} else {
			img = require('../../img/weigouxuan.png')
		}
		let contractsView = [];
		contractsView = ['债权转让协议', '平安银行服务协议'].map((item, index) => {
			return <LinkLabel key={index} textMsg={`《${item}》`} _onPress={this.goToContract.bind(this, item)} />
		})

		return (
			<ScrollView style={styles.container}>
				<View style={{ backgroundColor: 'white' }}>
					<Text style={{ marginLeft: 5, marginTop: 20, height: 30 }}>融资款账户</Text>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 10, marginRight: 15 }}>
						<Text style={{ fontSize: 15, lineHeight: 22 }} >{`致北京保理有限公司：
我司知晓并同意将网信集团与我司签订的合作协议项下应收账款总计50,000.00元转让给北京保理有限公司，我司现申请45,000.00元融资，我司在此承诺每次点击确认某笔反向保理融资即代表我司将该笔应收账款债权已转让给贵司。该笔融资款请贵方支付至下列指定账户：`}
						</Text>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >开户名称</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >北京乳制品经销商公司</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >银行卡号</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >4367 4203 3221 3465 345</Text>
						</View>
					</View>
					<Line />
					<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 15, marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }} >开户行</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text style={{ fontSize: 16 }} >中国建设银行北京知春路支行</Text>
						</View>
					</View>
				</View>

				<View style={{ marginTop: 20, backgroundColor: 'white' }}>
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
export default FinancingCconfirm;
