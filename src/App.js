import React, { Component } from 'react';
import './App.css';
import hookAndRender from './hookAndRender';

window.React = React;
class App extends Component {
  constructor() {
    super();
    this.state = {
      code: '// Enter react component'
    }
  }
  onChange = (e) => {
    const code = e.target.value;
    this.setState({
      code
    })
    hookAndRender(code);
  }
  onKeyDown = e => {
    if (e.keyCode === 9) {
      e.preventDefault();
      this.setState(state => {
        return {
          code: state.code + '  '
        }
      })
    }
  }
  render() {
    return (
      <div className="App">

        <textarea
          className="App-code-area"
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          value={this.state.code}
          >
        </textarea>

      </div>
    );
  }
}

export default App;
