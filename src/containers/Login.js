import { connect } from 'react-redux';
import Login from '../components/Login'


const mapStateToProps = state => ({
	state: state,
});

export default connect(mapStateToProps)(Login);