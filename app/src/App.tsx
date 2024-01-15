import React from 'react';
import Global from "./Context/Global.jsx";
import Routes from './Routes';

function App() {
  return (
    <Global>
      <Routes />
    </Global>
  );
}

export default App;