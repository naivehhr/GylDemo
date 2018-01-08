/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 20:16:21 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 20:56:32
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RefreshView from '../../common/RefreshView'
import { connect } from 'react-redux';
import { FaeComponent } from '@faegroup/common'
const {
  W,
	H,
} = FaeComponent
import Card from './Card'

class ReverseFactor extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: '反向保理',
	});

	state = {
		data: '1'.repeat(10).split('')
	}

	_renderItem = (isTriggerPressFn, data) => {
		return (
			<View style={{ width: W, marginBottom: 10 }} >
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

export default connect()(ReverseFactor);
