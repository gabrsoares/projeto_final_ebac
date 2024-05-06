import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteComponent from "../Components/NoteComponent/NoteComponent";
import { NoteContext, NoteContextType } from '../Contexts/NoteContext';
import { mockContext } from './test.config';

describe('NoteComponent', () => {
  
    it('renderizando componente', () => {
      render(
        <NoteComponent />,
        { wrapper: ({ children }) => <NoteContext.Provider value={mockContext}>{children}</NoteContext.Provider> }
      );
      expect(screen.getByPlaceholderText('Título')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Coloque seus pensamentos aqui')).toBeInTheDocument();
      expect(screen.getByText('Enviar')).toBeInTheDocument();
      expect(screen.getByText('Cancelar')).toBeInTheDocument();
    });
  
    it('verifica se limpa os inputs e muda o estado quando aperta o botão de cancelar', () => {
      render(
        <NoteComponent />,
        { wrapper: ({ children }) => <NoteContext.Provider value={mockContext}>{children}</NoteContext.Provider> }
      );
  
      const titleInput = screen.getByPlaceholderText('Título');
      const textArea = screen.getByPlaceholderText('Coloque seus pensamentos aqui');
      const cancelButton = screen.getByText('Cancelar');
  
      fireEvent.change(titleInput, { target: { value: 'Nova Nota' } });
      fireEvent.change(textArea, { target: { value: 'Conteúdo da Nova Nota' } });
  
      fireEvent.click(cancelButton);
  
      expect(titleInput).toHaveValue('');
      expect(textArea).toHaveValue('');
      expect(mockContext.setIsNewNote).toHaveBeenCalledWith(false);
      expect(mockContext.setIsEdit).toHaveBeenCalledWith(false);
    });
  
  });