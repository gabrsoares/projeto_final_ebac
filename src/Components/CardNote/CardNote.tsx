import React from "react";
import './style.css'
import Button from "../Button/Button";


interface CardProps {
    title:string;
    text: string;
}

const CardNote:React.FC<CardProps> = ({title, text}) => {
    return (
        <div className="cardNote">
            <h2 id="cardTitle">{title}</h2>
            <p id="cardText">{text}</p>
            <div className="buttons">
                <Button>Editar</Button>
                <Button>Excluir</Button>
            </div>
            
        </div>
    );
}

export default CardNote;