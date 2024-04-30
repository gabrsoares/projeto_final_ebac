import React from 'react'
import './style.css'

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    id?:string
}

const Button:React.FC<ButtonProps> = ({children, onClick, id}) =>{
  return (
    <div className='Button'>
      <button onClick={onClick} id={id}>
        {children}
      </button>
    </div>
    
  )
}

export default Button;