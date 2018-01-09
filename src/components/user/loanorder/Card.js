/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 14:26:30 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 15:25:46
 */

//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	Platform,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux';

import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
	Line
} = FaeComponent
const TouchBar = Platform.OS == 'ios' ? TouchableOpacity : TouchableNativeFeedback

class Card extends Component {
	state = {
		status: 'reviewing', //raising reviewing内部审核中
	}
	_onPressButton = (id) => {
		return e => {
			const { topNavigation } = this.props.state.nav
			topNavigation.navigate('LoanOrderDetail')
		}
	}

	render() {
		const { status } = this.state
		return (
			<TouchBar
				activeOpacity={0.8}
				onPress={this._onPressButton('fxbl')}
			>
				<View style={styles.container}>
					<View style={{ width: W, padding: 20, paddingBottom: 0, flexDirection: 'row' }}>
						<View style={{ flex: 5 }}>
							<View style={{
								height: 40,
								flexDirection: 'row'
							}}>
								<View style={{ flex: 2 }}>
									<Text>可到账金额(元)</Text>
								</View>
								<View style={{ flex: 3 }}>
									<Text>1000,000</Text>
								</View>
							</View>
							<View style={{
								height: 40,
								flexDirection: 'row'
							}}>
								<View style={{ flex: 2 }}>
									<Text>融资到期日</Text>
								</View>
								<View style={{ flex: 3 }}>
									<Text>2018-03-01</Text>
								</View>
							</View>
						</View>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Image
								style={{ resizeMode: 'contain', width: 20, height: 20 }}
								source={require('../../img/arrow-right.png')}
							/>
						</View>
					</View>

					<Line />
					{
						status == 'reviewing' ?
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flex: 1, marginLeft: 15, height: 50, }}>
									<Image
										style={{ resizeMode: 'contain', width: 80 }}
										source={require('../../img/tag-3.png')}
									/>
								</View>
							</View> :
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flex: 1, marginLeft: 15, height: 50, }}>
									<Image
										style={{ resizeMode: 'contain', width: 70 }}
										source={require('../../img/tag-2.png')}
									/>
								</View>
								<View style={{ marginRight: 15, width: 70, justifyContent: 'center' }}>
									{/* <Button title='审批' onPress={() => { }} /> */}
								</View>
							</View>
					}
				</View>
			</TouchBar>
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

const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Card);

