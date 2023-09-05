import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/DashBoard'
import Menu from './components/Menu';
import TeamTable from './components/TeamTable';
import Footer from './components/Footer';
import studentData from './components/studentData';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/teamtable" element={<TeamTable data={studentData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;