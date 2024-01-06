import React from 'react';
import Header from './Header';
import AppContainer from './AppContainer';
import ProjectsList from './ProjectsList';
import PortfolioImage from './PortfolioImage';
import './../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioImage />
      <AppContainer>
        <ProjectsList />
      </AppContainer>
    </div>
  );
}

export default App;
