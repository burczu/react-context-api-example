import React from 'react';
import { ColorContext } from './ColorContext';
import WelcomeText from './WelcomeText';

const App = () => {
  const [ state, setState ] = React.useState({ color: 'red' });
  const { Provider } = ColorContext;

  function onColorChange() {
    const newColor = state.color === 'red' ? 'black' : 'red';

    setState({ color: newColor });
  }

  return (
    <Provider value={state.color}>
      <WelcomeText />
      <button onClick={onColorChange}>Toggle color!</button>
    </Provider>
  );
}

export default App;
