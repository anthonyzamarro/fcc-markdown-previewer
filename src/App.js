import React, { Component } from 'react';
import TextArea from './TextArea.js';
import Previewer from './Previewer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ''
    }
  }
  changeShow(show) {
    this.setState({show: show})
  }
  render() {
    return (
      <div className="main-container">
        <h1>Markdown Previewer</h1>
        <TextArea handleChangeShow={this.changeShow.bind(this)}/> 
        <Previewer show={this.state.show}/>
      </div>
    );
  }
}

export default App;
