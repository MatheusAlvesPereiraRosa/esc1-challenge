import React from 'react';
import './index.css';
import SumCalculator from '../../Components/Sum';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Desafio técnico 1 - Matheus Alves</h1>
        <SumCalculator />
      </header>
    </div>
  );
}

export default Home;