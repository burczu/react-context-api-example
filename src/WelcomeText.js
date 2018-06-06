import React from 'react';
import { ColorContext } from './ColorContext';

const WelcomeText = (props) => {
  return (
    <ColorContext.Consumer>
      {color => <p style={{ color }}>Hello world!!</p>}
    </ColorContext.Consumer>
  );
};

export default WelcomeText;
