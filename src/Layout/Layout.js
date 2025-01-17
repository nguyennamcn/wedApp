import React from 'react'
import FooterPage from '../Components/Footer/FooterPage'
import HeaderPage from '../Components/Footer/HeaderPage'

export default function ({Component}) {
  return (
    <div>
        <HeaderPage />
        <div>
        <Component />
        </div>
        <FooterPage />
    </div>
  )
}
