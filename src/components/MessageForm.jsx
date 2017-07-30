import React from "react";
import moment from "moment";

class MessageForm extends React.Component {
	state = {
		messageText: "",
		usersName: "",
	};

	_handleChange = (ev) => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	_handleSubmit = (ev, err) => {
		ev.preventDefault();


		this.props.onSubmit({

			time: Date.now(),
			message: this.state.messageText,
			user: this.state.usersName,
		});

		this.setState({ messageText: "" });
	};

	render() {
		const { messageText, usersName } = this.state;

		return (
			<form className="MessageForm" onSubmit={this._handleSubmit}>
				<div className="error-message" />
				<textarea
					name="messageText"
					className="MessageForm-message"
					onChange={this._handleChange}
					value={messageText}
				/>
				<input
					name="usersName"
					className="MessageForm-name"
					placeholder="Users Name"
					onChange={this._handleChange}
					value={usersName}
				/>
				<button className="MessageForm-send"/>
			</form>
		);
	}
}

export default MessageForm;
