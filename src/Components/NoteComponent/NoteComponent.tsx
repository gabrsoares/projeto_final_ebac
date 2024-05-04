import React, { ChangeEvent, useContext } from 'react';
import './style.css';
import Button from '../Button/Button';
import { Item } from '../types';
import { NoteContext, NoteContextType } from '../../Contexts/NoteContext';

const NoteComponent: React.FC = () => {

    const context = useContext(NoteContext);

    if (!context) {
        return (<div><h1>Conteudo não disponível.</h1></div>)
    } // caso o context não consiga ser importado, mostra como conteúdo indisponível como tratamento de erro
    const { note, setNote, setIsNewNote, isEdit, setIsEdit, idUpdate, title, setTitle, text, setText } = context as NoteContextType;

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { //função para armazenar o texto do input
        const { id, value } = event.target;

        if (id === 'noteTitle') { // se o input for o do titulo, muda o valor do titulo, se não, muda o valor do texto
            setTitle(value);
        } else {
            setText(value);
        }
    };

    const handleClear = () => { //limpa o titulo e texto e volta para a lista de notas
        setTitle('');
        setText('');
        setIsNewNote(false);
        setIsEdit(false);
    };

    const getMaxId = (): number => { //função para obter o maior id e incrementá-lo na variavel id a fim de montar o map com key = id;
        const noteIds = note.map(item => item.id);
        const maxId = noteIds.length > 0 ? Math.max(...noteIds) : 0; // se note tiver conteudo, retorna o maior numero, se não, retorna 0
        return noteIds.length === 0? 0: maxId + 1; 
    };

    const handleComplete = () => { //função que armazena os dados inseridos na nota, enviando para o app.tsx
        if (isEdit) { // se for uma edição de nota, não queremos inserir uma nova e sim alterar os dados da existente.
            const index = note.findIndex((note)=>note.id === idUpdate)
            if (index !== -1){
                note[index].title = title
                note[index].text = text
            }
        } else { // caso seja uma nova nota e não uma edição
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
