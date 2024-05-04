import React from "react";
import './style.css'

interface CardProps {
    title:string;
    text: string;
    onClick:() => void;
}

const CardNote:React.FC<CardProps> = ({title, text, onClick}) => {
    return (
        <div className="cardNote" onClick={onClick}>
            <h2 id="cardTitle">{title}</h2>
            <p id="cardText">{text}</p>
        </div>
    );
}

export default CardNote;