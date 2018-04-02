/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 14:14:47 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-25 19:04:23
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import RefreshView from '../../common/RefreshView'
import { FaeComponent } from '@faegroup/common'
import { connect } from 'react-redux';
const {
  W,
	H,
} = FaeComponent
import Util from './Util'
import Card from './Card'

class ReverseFactorAll extends Component {
	static navigationOptions = {
		tabBarLabel: '全部',
	}

	state = {
		data: Util.makeData(),
	}

	onPress() {
	}

	componentDidMount() {
		// console.log(this.props)
	}
	
	componentWillUnmount () {
		console.log('卸载')
	}
	
	_renderItem = (isTriggerPressFn, data) => {
		return (
			<View style={{ marginBottom: 10 }} >
				<Card />
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<RefreshView
					data={this.state.data}
					renderItem={this._renderItem}
					viewType={'ListView'}
				/>
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
	},
});
const mapStateToProps = state => ({
	state: state,
});

//make this component available to the app
export default connect(mapStateToProps)(ReverseFactorAll);
