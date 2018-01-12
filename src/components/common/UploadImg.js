/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 17:18:16 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-12 11:54:30
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PhotoUpload from 'react-native-photo-upload'
import { FaeComponent } from '@faegroup/common'
const {
	W,
	H,
 } = FaeComponent
 /**
	* 上传图片  待扩展
	* @param {*} props 
	*/
const UploadImg = (props) => {
	return (
		<PhotoUpload
			onPhotoSelect={onPhotoSelect}
		>
			<Image
				style={{
					width: W,
					height: W / 2
				}}
				resizeMode='cover'
				source={require('../img/upload-img.png')}
			/>
		</PhotoUpload>
	)
}

const onPhotoSelect = (avatar) => {
 if(avatar){
	//  console.log(avatar)
		fetch('http://localhost:3002/upload.json',{
			method: 'POST',
			body: avatar
		}).then(d=> {
			console.log(d)
		}).catch(e => {
			console.log(e)
		})
 }
}
export default UploadImg;
