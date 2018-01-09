/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 17:18:16 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 17:29:26
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UploadImg = (props) => {
	return (
		<TouchableOpacity style={{}} activeOpacity={0.8}>
			<View style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: 100,
				backgroundColor: '#E4EDF1'
			}}>
				<Image
					style={{ width: 30, height: 30 }}
					source={require('../img/upload-img.png')}
				/>
				<View style={{ marginTop: 5 }}>
					<Text style={{
						color: '#2DB7F5',
						fontSize: 14,
						textAlign: 'center',
						lineHeight: 20,
					}}>{props.msg}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export default UploadImg;
