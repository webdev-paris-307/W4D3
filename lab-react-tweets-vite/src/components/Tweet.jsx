import Actions from "./Actions"
import User from "./User"

function Tweet(props) {
	console.log(props)
	return (
		<div className="tweet">
			<img src={props.tweet.user.image} className="profile" alt="profile" />

			<div className="body">
				<div className="top">
					<User user={props.tweet.user} />

					<span className="timestamp">{props.tweet.timestamp}</span>
				</div>

				<p className="message">{props.tweet.message}</p>
				<Actions />
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	)
}

export default Tweet

// function helloToSomeone() {
//   return `Hello ${someone}`
// }
