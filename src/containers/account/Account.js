/*
 * @Author: aran.hu 
 * @Date: 2018-01-09 18:55:20 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-09 18:55:43
 */

import { connect } from 'react-redux';
import Account from '../../components/account/Account'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Account);