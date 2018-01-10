/*
 * @Author: aran.hu 
 * @Date: 2018-01-10 15:29:06 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-10 15:40:20
 */

import { connect } from 'react-redux';
import App from '../components/App'


const mapStateToProps = state => ({
	state: state
});

export default connect(mapStateToProps)(App);