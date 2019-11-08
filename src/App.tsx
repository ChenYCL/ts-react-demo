import React from 'react';
import './App.css';
import TestPage from './pages/TestPage'

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <TestPage/>
            </header>
        </div>
    );
}

export default App;
