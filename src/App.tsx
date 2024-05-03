import React, { useEffect } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import CardNote from './Components/CardNote/CardNote';
import CardContainer from './Components/CardContainer/CardContainer';
import NoteComponent from './Components/NoteComponent/NoteComponent';
import { NoteContext } from './Contexts/NoteContext';
import Filter from './Components/Filter/Filter';

function App() {
  const { isNewNote, setIsNewNote, note, setNote, setIsEdit, setIdUpdate, setTitle, setText, filteredNotes , setFilteredNotes} = React.useContext(NoteContext)!;

  useEffect(()=> {
    setFilteredNotes(note)
  }, [note, setFilteredNotes])
  
  const handleToggleModal = ():void => {
    setIsNewNote(isNewNote? false : true);
  }

  const handleEdit = (id:number) => {
    setIsEdit(true);
    setIdUpdate(id);
    const index = note.findIndex((note)=>note.id === id);
    if (index !== -1){
      setTitle(note[index].title);
      setText(note[index].text);
    }
    handleToggleModal();
  }
  
  const handleDelete = (id:number):void => {
    setNote(note.filter((item) => item.id !== id))
  }

  
  return (
    <div className="App">
        {!isNewNote? (
          <div> 
            <Filter/>
            <CardContainer>
              {filteredNotes.map((item) => (
                <div className='card' key={item.id}>
                  <CardNote title={item.title} text={item.text}/>
                  <div className='cardButtons'>
                    <Button onClick={() => handleEdit(item.id)}>Editar</Button>
                    <Button onClick={() => handleDelete(item.id)}>Excluir</Button>
                  </div>
                </div>
              ))}
            </CardContainer>
            <div >
              <Button onClick={handleToggleModal}>Adicionar Nota</Button>
            </div>
          </div>
        ) : <NoteComponent/>}
    </div>
  );
}

export default App;