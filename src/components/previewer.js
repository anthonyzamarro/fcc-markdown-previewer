import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
let marked = require('marked');

class Preview extends Component {
  render() {
  	marked.setOptions({
  		breaks: true,
  		gfm: true
  	})
    let c = this.props.content;
    function createMarkup() {
      return { __html: marked(c) };
    }
    // const output = createMarkup() === null ? '' : createMarkup();
    return (
      <div className="container preview-container">
        <h1>Preview</h1>
        <hr />
        <p>see changes here</p>
        <p id="preview" className="preview-area" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    );
  }
}

function mapStateToProps(content) {
  return {
    content: content
  };
}

export default connect(mapStateToProps)(Preview);
// export default Preview;
