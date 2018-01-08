/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 15:53:58 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 21:04:37
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import RefreshFlatList, { RefreshState, ViewType } from 'react-native-refreshflatlist'
import { FaeComponent } from '@faegroup/common'
const {
	W,
	H,
 } = FaeComponent
 const width = W
class RefreshView extends Component {

	state = {
		headerHeight: 60,
		msg: '123msg'
	}

	_listFooterComponent = () => {
		return (
			<View style={{
				flexDirection: 'row',
				alignContent: 'center',
				justifyContent: 'center'
			}}>
				<Text>- 没有更多了 -</Text>
			</View>
		)
	}

	_customerHeader = (refreshState, percent) => {
		const { headerHeight, msg } = this.state
		switch (refreshState) {
			
			case RefreshState.releaseToRefresh:
				return (
					<Animated.View style={{ justifyContent: 'center', alignItems: 'center', width: width, height: headerHeight, }} >
						<Text>{'松手刷新'}</Text>
					</Animated.View>
				)
			case RefreshState.refreshing:
				return (
					<Animated.View style={{ justifyContent: 'center', alignItems: 'center', width: width, height: headerHeight, }} >
						<Text>{'刷新中....'}</Text>
					</Animated.View>
				)
			case RefreshState.refreshdown:
				return (
					<Animated.View style={{ flexDirection: 'row', height: headerHeight, justifyContent: 'center', alignItems: 'center'}}>
						<Text>{'刷新完成'}</Text>
					</Animated.View>
				)
			default:
				return (
					<View style={{ justifyContent: 'center', alignItems: 'center', height: headerHeight, width: width }}>
						<Text>{'下拉刷新'}</Text>
					</View>
				)
		}
	}

	render() {
		return (
			<RefreshFlatList
				{...this.props}
				customRefreshView={this._customerHeader}
				listFooterComponent={this._listFooterComponent}
			/>
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
export default RefreshView;
