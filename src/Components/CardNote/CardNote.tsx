import React from "react";
import './style.css'

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
            </div>
            
        </div>
    );
}

export default CardNote;