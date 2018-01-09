/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 10:16:28 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 17:38:31
 */

import { connect } from 'react-redux';
import FinancingConfirm from '../../../components/user/loan/FinancingConfirm'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(FinancingConfirm);