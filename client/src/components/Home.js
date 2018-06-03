import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';

const Home = ({ username }) => (
	<Grid style={{ height: '75vh' }} columns={1} centered verticalAlign="middle">
		<Grid.Column>
			{username ? `Welcome ${username}` : 'Welcome please sign in'}
		</Grid.Column>
	</Grid>
);

const mapStateToProps = (state) => {
	return { username: state.user.username };
};

export default connect(mapStateToProps)(Home);
