import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

	constructor(props) {
		super(props);
		this.state = { comment: '' };
	}

	handleChange(event) {
		this.setState({ comment: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: ''});
		console.log("handling");
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group comment-box">
					<label>Add a Comment </label>
					<textarea 
						className="form-control"
						value={this.state.comment}
						onChange = {this.handleChange.bind(this)}/>
				</div>
				<button type="submit" className="btn btn-primary">Add</button>
			</form>
		)
	}
}

export default connect(null, actions)(CommentBox);
