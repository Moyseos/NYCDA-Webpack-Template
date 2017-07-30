import React from "react";
import moment from "moment";

class MessageList extends React.Component {
	render() {
		const { messages } = this.props;

		return (
			<div className="Messages">
				{messages.map((msg) => (
					<div className="Messages-message">
						<div className="Messages-message-time">
							{moment(msg.time).format("LT")}
						</div>
						<div className="Messages-message-user" />
						{msg.user} says:
						<div className="Messages-message-text">
							{msg.message}
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default MessageList;
