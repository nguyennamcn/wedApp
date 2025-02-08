import React from 'react'
import '../AdminPage/admin.css'

export default function AdminPage() {
    const handleClick = () =>{
        var a = document.querySelector('.class1')
        a.classList.add('class2')
    }
  return (
    <div
        style={{
            width: '100%',
            height: '100vh',
            background: 'red',
            position: 'relative',
            position: 'fixed'
        }}
    >
        <button onClick={handleClick} style={{position: 'absolute' ,zIndex: '1'}}> next </button>
        <div className='class1'></div>
    </div>
  )
}
