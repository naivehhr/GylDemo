//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

class CommonComponent extends Component {

	constructor(props) {
		super(props)

	}
	componentDidMount() {
		console.log('this.props', this.props)
		// 可以这样动态改
		// const {setParams} = this.props.navigation;
		// setParams({name: 'Lucy'})
	}
	render() {
		// console.log('CommonComponent', this.props)
		const { navigation } = this.props
		const { routeName } = navigation.state
		if (routeName == 'p1') {
			return (
				<View style={styles.container}>
					<Text>CommonComponent</Text>
					<Button
						onPress={() => {navigation.navigate('p2')}}
						title="Go to P2"
					/>
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<Text>CommonComponent</Text>
				</View>
			);
		}
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
// export default CommonComponent;

const mapStateToProps = state => ({
	state: state,
});
export default connect(mapStateToProps)(CommonComponent);
