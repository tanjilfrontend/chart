import React from 'react'

const Button = ({text,active}) => {
  return (
    <button className={` text-sm font-medium px-10 py-5 border border-solid rounded-lg border-[#1492E6] ${active? 'bg-[#1492E6] text-white':'text-[#1492E6]'}`}>{text}</button>
  )
}

export default Button;
