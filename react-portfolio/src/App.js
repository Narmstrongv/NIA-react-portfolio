import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Header></Header>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
