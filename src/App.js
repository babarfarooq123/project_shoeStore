import React, {useState} from 'react';
import './App.css';
import Routerconfig from './router';
import Context from './component/context';

function App() {
  let context = useState([])
  return (
    <Context.Provider value={context}>
      <div className="App">
        <Routerconfig />
      </div>
    </Context.Provider>
  );
}

export default App;
