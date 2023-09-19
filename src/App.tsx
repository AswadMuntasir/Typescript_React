import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes/Routes'; // Import your RoutesComponent

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <RoutesComponent />
      </div>
    </Router>
  );
}

export default App;