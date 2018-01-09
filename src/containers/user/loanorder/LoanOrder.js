/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 13:45:45 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 13:53:14
 */

import { connect } from 'react-redux';
import LoanOrder from '../../../components/user/loanorder/LoanOrder'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(LoanOrder);