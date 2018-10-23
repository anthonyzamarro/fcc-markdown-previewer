import React, { Component } from 'react';

class TextArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
		this.getInput = this.getInput.bind(this);
	}
	getInput(e) {
		this.setState({
			input: e.target.value
		});
		console.log(this.state);
	}
	render() {
		return(
			<div className="textarea-container">
				<textarea id="editor" onChange={this.getInput}></textarea>
			</div>
		)
	}
}

export default TextArea;