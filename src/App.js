import './App.css';
import React from 'react';
import Dashboard from './components/DashBoard';
import Menu from './components/Menu';
import FlexGrow from './components/Item';


function App() {
  
  return (
    <div className="App">
    <Menu/>
    <div style={{ marginTop: 92 }}></div>
      <main>
        {/* <Dashboard /> */}
        <FlexGrow />
      </main>
    </div>
  );
}

export default App;