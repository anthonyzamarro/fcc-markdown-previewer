import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import userInput from "../actions/inputAction";

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.content.init
    };
    this.props.textChange(this.state.val);
  }
  handleChange(e) {
    this.setState({
      val: e.target.value
    });
    this.props.textChange(e.target.value);
  }
  render() {
    return (
      <div class="container textarea-container">
        <h1>Text Area</h1>
        <hr />
        <p>Type any <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Github Markdown</a></p>
        <textarea
          id="editor"
          cols="60"
          rows="35"
          onChange={this.handleChange.bind(this)}
          value={this.state.val}
        />
      </div>
    );
  }
}

function mapStateToProps(content) {
  return {
    content: content
  };
}

const mapDispatchToProps = dispatch => {
  return {
    textChange: data => {
      dispatch(userInput(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
