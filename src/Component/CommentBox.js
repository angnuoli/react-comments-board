import React, {Component} from 'react'

class CommentBox extends Component {
	constructor (props) {
		super(props) 
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		this.props.onAddComment(this.textInput.value)
		this.textInput.value = ""
		event.preventDefault()
	}

	render() {
		return (
			<form className="p-5" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<h2>Comment</h2>
					<input 
						type='text'
						className="form-control"
						placeholder="Please input..."
						ref={(textInput) => (this.textInput = textInput)}
						/>
					<button type="submit" className="btn btn-primary">Comment</button>
				</div>
				<p>Total comments: {this.props.commentsLength}</p>
			</form>
		)
	}
}

export default CommentBox;