import React, { useContext } from 'react';
import { ContextApp } from 'reducer';

const Main: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, dispatch } = useContext(ContextApp);

  return <div>HELLO</div>;
};

export default Main;
