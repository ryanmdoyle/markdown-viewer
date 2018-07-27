import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1 id="title">Markdown Viewer</h1>
        </div>
        <div className="grid-container">
          <div id="controls" className={'grid-children'}>
            <p>How to Use:</p>
          </div>
          <div id="input" className={'grid-children'}>
             <textarea type="text" placeholder="Paste markdown here"></textarea>
          </div>
          <div id="display" className={'grid-children'}>display</div>
        </div>
      </div>
    );
  }
}

export default App;
