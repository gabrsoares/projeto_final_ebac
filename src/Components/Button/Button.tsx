import React from 'react'
import './style.css'

interface ButtonProps {
    width?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button:React.FC<ButtonProps> = ({width, children, onClick}) =>{
  return (
    <button style={{width: width}} id='defaultButton' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button;