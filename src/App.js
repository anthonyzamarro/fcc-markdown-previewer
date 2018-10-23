import React, { Component } from 'react';
import TextArea from './TextArea.js';
import Previewer from './Previewer.js';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Markdown Previewer</h1>

        <TextArea /> <Previewer />
      </div>
    );
  }
}

export default App;
