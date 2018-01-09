/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 18:56:07 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-09 18:56:07 
 */
import { connect } from 'react-redux';
import Agent from '../../components/account/Agent'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Agent);