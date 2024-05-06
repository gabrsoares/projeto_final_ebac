import React, { useContext} from 'react';
import { act, render, screen } from '@testing-library/react';
import { NoteContext, NoteContextType } from "../Contexts/NoteContext";


const ComponentExample: React.FC = () => { //exemplo de componente
    const contextValue = useContext(NoteContext);
  
    return (
      <div>
        <p>Teste</p>
        <p>isNewNote: {contextValue?.isNewNote.toString()}</p>
      </div>
    );
  };
  
  test('verifica se todos as props carregam', () => {
    const contextSim: NoteContextType = {
      isNewNote: true,
      setIsNewNote: () => {},
      note: [],
      setNote: () => {},
      isEdit: false,
      setIsEdit: () => {},
      idUpdate: 0,
      setIdUpdate: () => {},
      title: '',
      setTitle: () => {},
      text: '',
      setText: () => {},
      filteredNotes: [],
      setFilteredNotes: () => {},
      show: false,
      setShow: () => {},
    };
      
    act(() => {
      <NoteContext.Provider value={contextSim}>
        <ComponentExample />
      </NoteContext.Provider>
      })
  });