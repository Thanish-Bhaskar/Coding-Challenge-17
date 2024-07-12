//U08201790
import React from 'react';
import './App.css';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title text="Task Management and Motivation App" />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer className="App-footer">
        <FancyText text="© 2024 Your Name. All rights reserved." />
      </footer>
    </div>
  );
}

export default App;
