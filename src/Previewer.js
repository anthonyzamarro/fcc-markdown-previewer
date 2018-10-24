import React, { Component } from 'react';
// import TextArea from './TextArea.js';

class Previewer extends Component {
	render() {
		return(
			<div className="previewer-container">
				<h2>Markdown Shows Here</h2>
				<div className="previewer" id="preview">{this.props.show}</div>
			</div>
		)
	}
}

export default Previewer;