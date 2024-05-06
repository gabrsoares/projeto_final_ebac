import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Note from '../Components/Note/Note';
import { NoteContext, NoteContextType } from '../Contexts/NoteContext';
import { mockContext } from './test.config';

describe('Note Component', () => {

  it('renderiza titulo e texto', () => {
    render(
      <NoteContext.Provider value={mockContext}>
        <Note />
      </NoteContext.Provider>
    );
    const noteTitle = screen.queryByTestId('noteTitle')
    expect(noteTitle).toBeInTheDocument()
    const noteText = screen.queryByTestId('noteText')
    expect(noteText).toBeInTheDocument()
  });

  it('verifica se handleClose ativa quando clica no botão de fechar', () => {
    render(
      <NoteContext.Provider value={mockContext}>
        <Note />
      </NoteContext.Provider>
    );

    const closeButton = screen.getByText('Fechar');
    fireEvent.click(closeButton);

    expect(mockContext.setTitle).toHaveBeenCalledWith('');
    expect(mockContext.setText).toHaveBeenCalledWith('');
    expect(mockContext.setShow).toHaveBeenCalledWith(false);
  });
});