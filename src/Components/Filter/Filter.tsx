import React, { useState } from 'react'
import './style.css'
import { NoteContext } from '../../Contexts/NoteContext';


const Filter:React.FC = () => {

  const {note, setFilteredNotes, filteredNotes} = React.useContext(NoteContext)!;  
  const [option, setOption] = useState<string>("title");

  const changeOption = (event:any) => { //função para armazenar o valor escolhido no select para ser utilizado no filter
    const selectOption = event.target.value
    setOption(selectOption);
  }
  
  const handleFilter = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const query = event.target.value; //armazena o valor do input

    if(!query) {
        setFilteredNotes(note);
    } else {
        if (option === "title"){
            setFilteredNotes(filteredNotes.filter((item)=> item.title.includes(query))) //filtra os itens por titulo onde verifica quais possuem os caracteres inseridos na query
        } else {
            setFilteredNotes(filteredNotes.filter((item)=> item.text.includes(query))) //filtra os itens por texto onde verifica quais possuem os caracteres inseridos na query
        }
    }
  };
  

  return (
    <div className="filter">
        <input type="text" onChange={handleFilter} className="inputFilter"/>
        <label htmlFor="filterOption">Filtrar por:</label>
        <select name="filterOption" id="filterOption" onChange={changeOption}>
            <option value="title">Título</option>
            <option value="text">Texto</option>
        </select>
    </div>
  )
}

export default Filter