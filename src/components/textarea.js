import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import userInput from "../actions/inputAction";
import clearInput from "../actions/clearAction";
// import Clear from "./clear";

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.content.init
    };
    this.props.textChange(this.state.val);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      val: e.target.value
    });
    this.props.textChange(e.target.value);
  }
  handleClick(e) {
  	this.setState({
  		val: ''
  	})
  	this.props.clearText('');
  }
  render() {
    return (
      <div className="container textarea-container">
        <h1>Text Area</h1>
        <hr />
        <p className="textarea-content">
        	Type any <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer"> 
        	Github markdown
        </a>
        <input type="button" value="clear" id="clear" className="clear-btn" onClick={this.handleClick}/>
        </p>
        <textarea
          id="editor"
          cols="60"
          rows="39"
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
    },
    clearText: data => {
    	dispatch(clearInput(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
