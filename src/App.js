import React, { Component } from 'react';
import './App.css';
import {markdown} from 'markdown';

const exampleMD = "This is a header\n===========\n\nThis is a sub-header\n---------------------\n\nHere is a link to my [codepen] (https://codepen.io/ryanmdoyle) and my \n[github] (https://github.com/ryanmdoyle).\n\n`<p> this is an example of inline code </p>`\n\n\n```\n\n    This is an example of a multiline code:\n\n    updateDisplay(event) {\n\n        this.setState({\n          display: markdown.toHTML(event.target.value)\n     })\n  }\n\n```\n\nYou can make an unordered list:\n\n- One Item\n- Two Items\n\nOr ordered list:\n\n1. First thing\n2. second thing\n\nMake text _italic_ or **bold**.\n\n> Isn't this a great blockquote!\n\nMostly made with:\n\n![React image](https://blog.zenika.com/wp-content/uploads/2015/02/vignette_react.jpg)"


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: exampleMD,
      display: markdown.toHTML(exampleMD)
    }

    this.updateDisplay = this.updateDisplay.bind(this);
    this.setInput = this.setInput.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  updateDisplay(event) {
    this.setState({
      input: event.target.value,
      display: markdown.toHTML(event.target.value)
    })
  }

  setInput() {
    return {__html: this.state.input}
  }

  setDisplay() {
    return {__html: this.state.display}
  }

  render() {
    const markdownDisplay = markdown.toHTML( "Hello *World*!" );
    console.log(typeof markdownDisplay)
    return (
      <div>
        <div className="grid-container">
          <div id="controls" className={'grid-children'}>
            <h1>Simple Markdown Viewer</h1>
            <p>How to Use:</p>
            <p> Enter markdown in the grey input field and it will be converted to HTML below.</p>
            <em><a href="https://github.com/ryanmdoyle">Created by ryanmdoyle</a></em><br /><br />
            <em><a href="https://github.com/evilstreak/markdown-js">Use of evilstreak/markdown-js for conversion.</a></em>
          </div>
          <div id="input" className={'grid-children'}>
             <textarea type="text" onChange={this.updateDisplay} value={this.state.input}></textarea>
          </div>
          <div id="display" className={'grid-children'} dangerouslySetInnerHTML={this.setDisplay()}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
