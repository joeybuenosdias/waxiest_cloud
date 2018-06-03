import React from 'react';
import { connect } from 'react-redux';

const Home = ({ username }) => (
	<div style={{ height: '75vh' }} columns={1} centered verticalAlign="middle">
		<div>{username ? `Welcome ${username}` : 'Welcome please sign in'}</div>
	</div>
);

const mapStateToProps = (state) => {
	return { username: state.user.username };
};

export default connect(mapStateToProps)(Home);
