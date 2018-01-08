/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 16:22:07 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-08 16:22:31
 */


import { connect } from 'react-redux';
import Approval from '../../components/coreuser/ReverseFactor/Approval'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Approval);