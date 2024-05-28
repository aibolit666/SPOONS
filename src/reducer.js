import React from 'react';

export const ContextApp = React.createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'items':
      return {
        ...state,
        ...action,
      };
    default:
      throw new Error();
  }
};
