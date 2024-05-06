import React, { useEffect } from 'react';
import './App.css';
import { IoMdAdd } from "react-icons/io";
import Button from './Components/Button/Button';
import CardNote from './Components/CardNote/CardNote';
import CardContainer from './Components/CardContainer/CardContainer';
import NoteComponent from './Components/NoteComponent/NoteComponent';
import { NoteContext } from './Contexts/NoteContext';
import Filter from './Components/Filter/Filter';
import Note from './Components/Note/Note';

function App() {
  const { isNewNote, setIsNewNote, note, setNote, setIsEdit, setIdUpdate, setTitle,
    setText, filteredNotes , setFilteredNotes, show, setShow} = React.useContext(NoteContext)!; //context com todas as variaveis necessárias

  useEffect(()=> { //atualiza em tempo real a variavel filteredNotes para ficar igual a de note
    setFilteredNotes(note)
  }, [note, setFilteredNotes])
  
  const handleToggleModal = ():void => { //troca a tela para o modal de inserção de nota
    setIsNewNote(isNewNote? false : true);
  }

  const findId = (id:number) => {
    const index = note.findIndex((note)=>note.id === id); // procura a posição do array onde os ids coincidem
    if (index !== -1){
      setTitle(note[index].title);
      setText(note[index].text);
    }
  }

  const handleEdit = (id:number) => { // função para editar uma nota
    setIsEdit(true);
    setIdUpdate(id);
    findId(id)
    handleToggleModal();
  }
  
  const handleDelete = (id:number):void => { //função para deletar uma nota
    setNote(note.filter((item) => item.id !== id))
  }

  const showNote = (id:number) => {
    findId(id)
    setShow(true);
  }

  
  return (
    <div className="App">
        { show? <Note />
        : !isNewNote? (
          <div> 
            {note.length > 0 && <Filter/>} 
            <CardContainer>
              {filteredNotes.map((item) => (
                <div className='card' key={item.id}>
                  <CardNote title={item.title} text={item.text} onClick={() => showNote(item.id)} />
                    <div className='cardButtons'>
                      <Button onClick={() => showNote(item.id)}>Ver</Button>
                      <Button data-testid='btn-edit' onClick={() => handleEdit(item.id)}>Editar</Button>
                      <Button data-testid='btn-remove' onClick={() => handleDelete(item.id)}>Excluir</Button>
                    </div>
                </div>
              ))}
            </CardContainer>
            <div className='newNote'>
              <Button onClick={handleToggleModal}><IoMdAdd style={{fontSize:'1.4rem', marginRight:".2rem"}}/>Adicionar Nota</Button>
            </div>
          </div>
        ) : <NoteComponent/>}
    </div>
  );
}

export default App;