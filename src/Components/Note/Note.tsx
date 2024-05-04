import React, { useContext } from 'react'
import './style.css'
import { NoteContext, NoteContextType } from '../../Contexts/NoteContext'
import Button from '../Button/Button';

const Note: React.FC = () => {
  
  const context = useContext(NoteContext);
  if (!context) {
    return (<div><h1>Conteudo não disponível.</h1></div>)
  } // caso o context não consiga ser importado, mostra como conteúdo indisponível como tratamento de erro
  const { setShow, title, text, setTitle, setText} = context as NoteContextType;

  const handleClose = () => { // fecha o componente de visualização
    setTitle("");
    setText("");
    setShow(false);
  }

  return (
    <div className='note'>
        <h1 className='noteTitle'>{title}</h1>
        <p className='noteText'>{text}</p>
        <div className="noteClose">
            <Button onClick={handleClose}>Fechar</Button>
        </div>
    </div>
  )
}

export default Note