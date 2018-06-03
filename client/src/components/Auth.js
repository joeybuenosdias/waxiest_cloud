import React from 'react';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { authenticate } from '../actions/user';
import { connect } from 'react-redux';

class Auth extends React.Component {
	defaults = { email: '', password: '' };
	state = { ...this.defaults };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let { email, password } = this.state;
		let { title, history, dispatch } = this.props;
		dispatch(authenticate(email, password, title, history));
	};

	render() {
		let { title } = this.props;
		let { email, password } = this.state;
		return (
			<Grid
				style={{ height: '75vh' }}
				columns={1}
				centered
				verticalAlign="middle">
				<Grid.Column>
					<Header as="h3">{title}</Header>
					<Form onSubmit={this.handleSubmit}>
						<Form.Input
							name="email"
							label="email"
							required
							type="email"
							onChange={this.handleChange}
							value={email}
						/>
						<Form.Input
							name="password"
							label="password"
							required
							type="password"
							onChange={this.handleChange}
							value={password}
						/>
						<Button>Submit</Button>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect()(Auth);
