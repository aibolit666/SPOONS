import React, { useReducer } from 'react';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { reducer, ContextApp } from 'reducer';
import Main from 'pages/Main/Main';
import './App.css';

const items: Array<string> = [];

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, items);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ContextApp.Provider>
  );
};

export default App;
