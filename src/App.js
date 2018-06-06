import React, { Component } from 'react';
import { ColorContext } from './ColorContext';
import WelcomeText from './WelcomeText';

class App extends Component {
  state = { color: 'red' };

  onColorChange = () => {
    const { color } = this.state;
    const newColor = color === 'red' ? 'black' : 'red';

    this.setState({ color: newColor });
  }

  render() {
    return (
      <ColorContext.Provider value={this.state.color}>
        <WelcomeText />
        <button onClick={this.onColorChange}>Toggle color!</button>
      </ColorContext.Provider>
    );
  }
}

export default App;
