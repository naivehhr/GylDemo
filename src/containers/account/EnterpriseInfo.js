/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 18:56:25 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-09 18:56:25 
 */

import { connect } from 'react-redux';
import EnterpriseInfo from '../../components/account/EnterpriseInfo'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(EnterpriseInfo);