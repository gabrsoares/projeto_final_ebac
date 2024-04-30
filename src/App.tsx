import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import CardNote from './Components/CardNote/CardNote';
import CardContainer from './Components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <CardContainer>
      <CardNote 
      title = "teste titulo"
      text = "testando texto"
      />
    </CardContainer>
    <div >
      <Button>Adicionar Nota</Button>
    </div>
    
    </div>
  );
}

export default App;
