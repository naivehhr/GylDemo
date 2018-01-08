/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 10:21:56 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 10:22:41
 */


import { connect } from 'react-redux';
import UserHome from '../../components/user/UserHome'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(UserHome);