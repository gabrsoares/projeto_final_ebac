import React, { ChangeEvent, useContext } from 'react';
import './style.css';
import Button from '../Button/Button';
import { Item } from '../types';
import { NoteContext, NoteContextType } from '../../Contexts/NoteContext';

const NoteComponent: React.FC = () => {

    const context = useContext(NoteContext);

    if (!context) {
        return (<div><h1>Conteudo não disponível.</h1></div>)
    }
    const { note, setNote, setIsNewNote, isEdit, setIsEdit, idUpdate, title, setTitle, text, setText } = context as NoteContextType;

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;

        if (id === 'noteTitle') {
            setTitle(value);
        } else {
            setText(value);
        }
    };

    const handleClear = () => {
        setTitle('');
        setText('');
        setIsNewNote(false);
        setIsEdit(false);
    };

    const getMaxId = (): number => {
        const noteIds = note.map(item => item.id);
        const maxId = noteIds.length > 0 ? Math.max(...noteIds) : 0;
        return noteIds.length === 0? 0: maxId + 1;
    };

    const handleComplete = () => {
        if (isEdit) {
            const index = note.findIndex((note)=>note.id === idUpdate)
            if (index !== -1){
                note[index].title = title
                note[index].text = text
            }
        } else {
            const newItem: Item = {
                id: getMaxId(),
                title: title,
                text: text
            };
            setNote(prevNote => [...prevNote, newItem]);
        }
        
        handleClear();
    };

    return (
        <div className='noteComponent'>
            <div className='textArea'>
                <input type="text" spellCheck='false' id='noteTitle' placeholder='Título' value={title} onChange={handleChange}/>     
                <textarea id='noteText' placeholder='Coloque seus pensamentos aqui' value={text} onChange={handleChange}/>
            </div>
            <div className='noteButtons'>
                <Button onClick={handleClear}>Cancelar</Button>
                <Button onClick={handleComplete}>Enviar</Button>  
            </div>
        </div>
    );
};

export default NoteComponent;
