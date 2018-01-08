/*
 * @Author: aran.hu 
 * @Date: 2018-01-08 13:58:48 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2018-01-08 13:58:48 
 */

import { connect } from 'react-redux';
import CoreUserHome from '../../components/coreuser/CoreUserHome'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(CoreUserHome);