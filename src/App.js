import './App.css';
import React from 'react';
import Dashboard from './components/DashBoard';
import Menu from './components/Menu';



function App() {
  
  return (
    <div className="App">
    <Menu/>
    <div style={{ marginTop: 92 }}></div>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;