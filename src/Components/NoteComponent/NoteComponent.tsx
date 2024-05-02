import React, { useState } from 'react'
import './style.css'
import Button from '../Button/Button'
import { Item } from '../types'

interface NoteProps {
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
    setNote: React.Dispatch<React.SetStateAction<Item[]>>;
    note: Item[];
}

const NoteComponent:React.FC<NoteProps> = ({setIsNewNote, setNote, note}) => {
    
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [id, setId] = useState<number>(0)

    const handleChange = (event:any) => {
        const {id, value} = event.target

        if (id === 'noteTitle') {
            setTitle(value)
        } else {
            setText(value)
        }
    }

    const handleCancel = () => {
        setTitle('')
        setText('')
        setIsNewNote(false);
    }

    const handleComplete = () => {
        setId(id + 1)
        const newId = id + 1

        const newItem: Item = {
            id: newId,
            title: title,
            text: text
        }
        setNote([...note, newItem])
        setIsNewNote(false)
    }
    
    return (
        <div className='noteComponent'>
            <div className='textArea'>
                <input type="text" spellCheck='false' id='noteTitle' placeholder='Título' value={title} onChange={handleChange}/>     
                <textarea id='noteText' placeholder='Coloque seus pensamentos aqui' value={text} onChange={handleChange}/>
            </div>
            <div className='noteButtons'>
                <Button onClick={handleCancel}>Cancelar</Button>
                <Button onClick={handleComplete}>Enviar</Button>  
            </div>
        </div>
    ) 
}

export default NoteComponent;