/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 15:50:16 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-09 15:50:16 
 */

import { connect } from 'react-redux';
import Register from '../components/Register'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Register);