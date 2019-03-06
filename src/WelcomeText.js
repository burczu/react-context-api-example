import React from 'react';
import { ColorContext } from './ColorContext';

const WelcomeText = (props) => {
  const contextColor = React.useContext(ColorContext);

  return (
      <p style={{ color: contextColor }}>Hello world!!</p>
  );
};

export default WelcomeText;
