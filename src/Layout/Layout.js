import React from 'react'
import FooterPage from '../Components/Footer/FooterPage'
import HeaderPage from '../Components/Header/HeaderPage'
import './layout.css'

export default function ({Component}) {
  return (
    <div>
        <HeaderPage />
        <div style={{marginTop: '8%'}}>
        <Component />
        </div>
        <FooterPage />
    </div>
  )
}
