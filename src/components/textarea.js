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
      <div class="container text-area-container">
        <h1>Text Area</h1>
        <hr />
        <textarea
          id="editor"
          cols="90"
          rows="40"
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
