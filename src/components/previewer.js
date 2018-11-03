import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
var marked = require('marked');

class Preview extends Component {
  render() {
    let c = this.props.content;
    function createMarkup() {
      return { __html: marked(c) };
    }
    return (
      <div class="container preview-container">
        <h1>Preview</h1>
        <hr />
        <p id="preview" dangerouslySetInnerHTML={createMarkup()} />
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
