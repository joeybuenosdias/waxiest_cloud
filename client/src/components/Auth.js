import React from 'react';
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
			<div style={{ height: '75vh' }}>
				<div>
					<h1>{title}</h1>
					<form onSubmit={this.handleSubmit}>
						<input
							name="email"
							label="email"
							required
							type="email"
							onChange={this.handleChange}
							value={email}
						/>
						<input
							name="password"
							label="password"
							required
							type="password"
							onChange={this.handleChange}
							value={password}
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(Auth);
