/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 13:31:31 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-12 17:17:34
 */

import React, { Component, } from 'react';
import { View, StyleSheet, Button, ART } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import CircleProgressView from './components/common/progress/CircleProgressView'
import AnimatedCircleProgress from './components/common/progress/AnimatedCircleProgress'
import AMAText from './components/common/progress/AMAText'
const { Surface, Shape, Path, Text } = ART;
import Wedge from './Wedge'
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
		// const path = new Path()
		// 	.moveTo(100, 100)
		// 	.arc(100, 0, 50)

		const line = ART.Path()
		line.moveTo(1, 1)
		line.lineTo(300, 1)

		const rectangular = new Path()
			.moveTo(1, 1)
			.lineTo(1, 99)
			.lineTo(99, 99)
			.lineTo(99, 1)
			.close()

		const circle = new Path()
			.moveTo(60, 10)
			.arc(0, 99, 25)
			.arc(0, -99, 25)
			.close()

		const _text = new Path()
			.moveTo(40, 40)
			.lineTo(99, 19)
		return (
			<View style={styles.container}>
				<Surface width={300} height={2}>
					<Shape d={line} stroke="#000000" strokeWidth={1} strokeDash={[10, 5]} />
				</Surface>

				<Surface width={300} height={100}>
					<Shape d={rectangular} stroke="#000000" strokeWidth={1} fill="#892265" />
				</Surface>

				<Surface width={200} height={200}>
					<Shape d={circle} stroke="#000000" strokeWidth={1} />
				</Surface>

				<Surface width={100} height={100}>
					<Text strokeWidth={1} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40, 40).lineTo(99, 10)} >React</Text>
				</Surface>

				<Surface width={100} height={100}>
					<Wedge
						outerRadius={50}
						startAngle={-90}
						endAngle={1}
						originX={50}
						originY={50}
						fill="blue" />
				</Surface>
				{/* <PercentageCircle radius={55} percent={this.state.p} color={"#3498db"}></PercentageCircle> */}
				{/* <CircleProgressView progress={100}>
                    <View style={{backgroundColor: '#987123', flex: 1,  alignItems: 'center'}}>
                        <Text>外部放入进度条中间的内容</Text>
                    </View>
                </CircleProgressView> */}

				{/* <AnimatedCircleProgress progress={180}>
					<View style={{ backgroundColor: '#987123', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<AMAText value={100} />
					</View>
				</AnimatedCircleProgress> */}

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
