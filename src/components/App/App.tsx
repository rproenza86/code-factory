import React from 'react';
import logo from './logo.png';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Building Web Applications close to perfects</p>
            </header>
        </div>
    );
};

export default App;
