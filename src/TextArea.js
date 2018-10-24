import React, { Component } from 'react';

class TextArea extends Component {
	handleChange(e){
        this.props.handleChangeShow(e.target.value)
    }
	render() {
		return(
			<div className="textarea-container">
				<h2>Enter Markdown Here</h2>
				<textarea id="editor" onChange={this.handleChange.bind(this)}></textarea>
			</div>
		)
	}
}

export default TextArea;