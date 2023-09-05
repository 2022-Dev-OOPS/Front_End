import React from 'react';
import './App.css';
import Dashboard from './DashBoard';
import Videos from './components/Videos';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import Menu from './components/Menu';
import { Route } from 'react-router-dom'; // Route 추가
import TeamTable from './TeamTable';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Dashboard} />
            <Route path="/videos" component={Videos} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/stats" component={Stats} />
            <Route path="/Teamtable" component={TeamTable} />
        </div>
    );
}

export default App;