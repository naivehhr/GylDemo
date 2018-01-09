/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 13:46:01 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 13:53:27
 */

import { connect } from 'react-redux';
import LoanOrderDetail from '../../../components/user/loanorder/LoanOrderDetail'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(LoanOrderDetail);