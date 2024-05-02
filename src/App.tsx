import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import CardNote from './Components/CardNote/CardNote';
import CardContainer from './Components/CardContainer/CardContainer';
import NoteComponent from './Components/NoteComponent/NoteComponent';
import { Item } from './Components/types'

function App() {
  const [isNewNote, setIsNewNote] = useState<boolean>(false)
  const [note, setNote] = useState<Item[]>([])
  
  const handleToggleModal = () => {
    setIsNewNote(isNewNote? false : true);
    console.log(isNewNote);
  }
  
  const test = () => {
    console.log(note)
  }

  const handleDelete = (id:number) => {
    note.filter(value => value.id !== id)
  }
  
  return (
    <div className="App">
    {!isNewNote? (
      <div> 
        <CardContainer>
          {note.map((item) => (
            <div className='card' key={item.id}>
              <CardNote title={item.title} text={item.text}/>
              <div className='cardButtons'>
                <Button>Editar</Button>
                <Button onClick={() => handleDelete(item.id)}>Excluir</Button>  
              </div>
            </div>
          ))}
        </CardContainer>
        <div >
          <Button onClick={handleToggleModal}>Adicionar Nota</Button>
        </div>
        <Button onClick={test}>teste</Button>
      </div>
    ) : <NoteComponent note={note} setNote={setNote} setIsNewNote={setIsNewNote}/>}
    </div>
  );
}

export default App;