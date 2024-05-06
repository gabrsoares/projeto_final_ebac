import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { NoteContext, NoteContextType } from './Contexts/NoteContext';

const mockNoteContext: NoteContextType = {
  isNewNote: false,
  setIsNewNote: jest.fn(),
  note: [
    { id: 1, title: 'Test Title 1', text: 'Test Text 1' },
    { id: 2, title: 'Test Title 2', text: 'Test Text 2' }
  ],
  setNote: jest.fn(),
  isEdit: false,
  setIsEdit: jest.fn(),
  idUpdate: 0,
  setIdUpdate: jest.fn(),
  title: '',
  setTitle: jest.fn(),
  text: '',
  setText: jest.fn(),
  filteredNotes: [
    { id: 1, title: 'Test Title 1', text: 'Test Text 1' },
    { id: 2, title: 'Test Title 2', text: 'Test Text 2' }
  ],
  setFilteredNotes: jest.fn(),
  show: false,
  setShow: jest.fn(),
};

describe('App Component', () => {
  test('renderiza app com a lista inicial', async () => {
    render(
      <NoteContext.Provider value={mockNoteContext}>
        <App />
      </NoteContext.Provider>
    );

    // valores genéricos inseridos anteriormente
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Text 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();
    expect(screen.getByText('Test Text 2')).toBeInTheDocument();
  });

  it('testa o adicionar nota para ver se altera o estado do isNewNote', () => {
    render(
      <NoteContext.Provider value={mockNoteContext}>
        <App />
      </NoteContext.Provider>
    );

    fireEvent.click(screen.getByText('Adicionar Nota'));

    expect(mockNoteContext.setIsNewNote).toHaveBeenCalled();
  });

  test('verifica se o botão de editar e remover existem', async () => {
    render(
      <NoteContext.Provider value={mockNoteContext}>
        <App />
      </NoteContext.Provider>
    );

    const editButton = screen.queryByTestId('btn-edit');
    expect(editButton).not.toBeInTheDocument();

    const removeButton = screen.queryByTestId('btn-remove');
    expect(removeButton).not.toBeInTheDocument();
    
  });
});