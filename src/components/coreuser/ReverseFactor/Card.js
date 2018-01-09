/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:47:29 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 14:39:10
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
	Line
} = FaeComponent
import { connect } from 'react-redux';

class Card extends Component {

	state = {
		status: 'approvaling', //raising approvaling
	}


	_doApproval = (id) => {
		return e => {
			const { topNavigation } = this.props.state.nav
			topNavigation.navigate('Approval')
		}
	}

	render() {
		const { status } = this.state
		return (
			<View style={styles.container}>
				<View style={{ width: W, padding: 20, paddingBottom: 0 }}>
					<View style={{
						height: 40,
						flexDirection: 'row'
					}}>
						<View style={{ flex: 1 }}>
							<Text>可到账金额(元)</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text>1000,000</Text>
						</View>
					</View>
					<View style={{
						height: 40,
						flexDirection: 'row'
					}}>
						<View style={{ flex: 1 }}>
							<Text>融资到期日</Text>
						</View>
						<View style={{ flex: 2 }}>
							<Text>2018-03-01</Text>
						</View>
					</View>
				</View>

				<Line />
					{
						status == 'approvaling' ?
							<View style={{flexDirection: 'row'}}>
								<View style={{ flex: 1, marginLeft: 15, height: 50, }}>
									<Image
										style={{ resizeMode: 'contain', width: 70 }}
										source={require('../../img/tag-1.png')}
									/>
								</View>
								<View style={{ marginRight: 15, width: 70, justifyContent: 'center' }}>
									<Button title='审批' onPress={this._doApproval('1')} />
								</View>
							</View> :
							<View style={{flexDirection: 'row'}}>
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
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
	},
});
const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Card);
