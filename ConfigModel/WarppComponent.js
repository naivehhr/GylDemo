/*
 * @Author: aran.hu 
 * @Date: 2018-01-16 17:54:49 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-16 18:27:46
 */



// 用来包装 TabNavigation DrawNavigation



import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReverseFactorTabNav from '../src/components/coreuser/ReverseFactor/ReverseFactorTabNav'
import TabNav from './TabNav'
import { connect } from 'react-redux';

export const getWarpPage = (params) => {
	const { componentType } = params
	return class WarppComponent extends Component {
		render() {
			// 这里怎么搞？ 动态的props传进来, 先不考虑redux维护用户信息等乱七八糟的
			/**
			 * 在这里把每一页的参数都注入进去么？
			 * 这里应该传入这个Tabs 中包含多少个子页面吧？诶？柑橘是圈梁信息呢
			 * 包括页面信息: title
			 * 页面请求参数信息
			 * 页面跳转信息
			 */
			return (
				<TabNav />
			);
		}
	}
	const mapStateToProps = state => ({
		state: state,
	});
	const Page = connect(mapStateToProps)(WarppComponent);
}