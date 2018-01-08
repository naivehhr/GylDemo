/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 13:31:31 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 10:08:22
 */

import React, { Component, } from 'react';
import { View, Text, StyleSheet, Button, ART } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import CircleProgressView from './components/common/progress/CircleProgressView'
import AnimatedCircleProgress from './components/common/progress/AnimatedCircleProgress'
import AMAText from './components/common/progress/AMAText'
const { Surface, Shape, Path } = ART;
class DetailsScreen extends Component {
	state = {
		p: 0
	}

	componentDidMount() {
		setInterval(() => {
			const { p } = this.state
			this.setState({ p: p + 1 })
		}, 100)
	}
	render() {
		const path = new Path()
			.moveTo(100, 100)
			.arc(100, 0, 50)
		return (
			<View style={styles.container}>
				{/* <PercentageCircle radius={55} percent={this.state.p} color={"#3498db"}></PercentageCircle> */}
				{/* <CircleProgressView progress={100}>
                    <View style={{backgroundColor: '#987123', flex: 1,  alignItems: 'center'}}>
                        <Text>外部放入进度条中间的内容</Text>
                    </View>
                </CircleProgressView> */}

				<AnimatedCircleProgress progress={180}>
                    <View style={{backgroundColor: '#987123', flex: 1,  alignItems: 'center',justifyContent:'center'}}>

                        <AMAText value={100}/>

                    </View>
								</AnimatedCircleProgress>

				{/* {<Surface width={400} height={400}>
					<Shape d={path} stroke="#000000" strokeWidth={5} />
				</Surface>} */}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default DetailsScreen;
