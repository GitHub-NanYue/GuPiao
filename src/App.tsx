import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import RouterViews from './router/RouterViews'
import config from './router/RouterConfig'
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterViews routes={config.routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
