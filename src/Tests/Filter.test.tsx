import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../Components/Filter/Filter';
import { NoteContext, NoteContextType } from '../Contexts/NoteContext';
import { mockContext } from './test.config';

describe('Filter Component', () => {
  it('renders Filter correctly', () => {
    render(
      <NoteContext.Provider value={mockContext}>
        <Filter />
      </NoteContext.Provider>
    );

    // Verifica se os elementos esperados estão presentes
    expect(screen.getByLabelText('Filtrar por:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('calls setFilteredNotes when input value changes', () => {
    render(
      <NoteContext.Provider value={mockContext}>
        <Filter />
      </NoteContext.Provider>
    );

    const inputElement = screen.getByRole('textbox');

    // Simula a mudança no valor do input
    fireEvent.change(inputElement, { target: { value: 'Test Note' } });

    // Verifica se a função setFilteredNotes foi chamada
    expect(mockContext.setFilteredNotes).toHaveBeenCalled();
  });


});