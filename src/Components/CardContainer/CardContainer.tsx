import React, { ReactNode } from "react";
import './style.css';

interface CardContainerProps {
    children:ReactNode
}

const CardContainer:React.FC<CardContainerProps> = ({children}) => {

    return (
        <div className="cardContainer">
            {children}
        </div>
    )
};

export default CardContainer;