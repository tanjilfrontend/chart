import React from 'react'

const UpArraow = ({className=''}) => {
  return (
   <div className={className}>
     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="26" viewBox="0 0 8 26" fill="none">
    <path d="M4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM3.5 1L3.5 26L4.5 26L4.5 1L3.5 1Z" fill="#1492E6"/>
    </svg>
   </div>
  )
}

export default UpArraow