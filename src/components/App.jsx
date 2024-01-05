import React from 'react';
import Header from './Header';
import AppContainer from './AppContainer';
import ProjectsList from './ProjectsList';
import './../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <ProjectsList />
      </AppContainer>
    </div>
  );
}

export default App;
