import React from 'react';
import { ColorContext } from './ColorContext';

const WelcomeText = (props) => {
  const { Consumer } = ColorContext;

  return (
    <Consumer>
      {color => <p style={{ color }}>Hello world!!</p>}
    </Consumer>
  );
};

export default WelcomeText;
