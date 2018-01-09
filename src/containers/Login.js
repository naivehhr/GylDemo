/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 15:50:12 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-09 15:50:12 
 */
import { connect } from 'react-redux';
import Login from '../components/Login'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Login);