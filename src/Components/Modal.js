import React from 'react'
import './index.css'
export default function Modal({show, onClose, children}) {
    if(!show){
   return null;
    }
  return (
    <div className='modal'>
        <div className='modal-content'>
        <span className="close" onClick={onClose}>&times;</span>
            {children}
        </div>
    </div>
  )
}
