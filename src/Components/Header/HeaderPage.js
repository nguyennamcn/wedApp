import React from 'react'
import UserMenu from './UserMenu'
import { NavLink } from 'react-router-dom'
import '../../css/Header/headerDrop.css';
import SearchFunction from '../SearchServ/SearchFunction';
import MenuAll from '../Menu/MenuAll';
import CartEven from '../CartEvent/CartEvent';


export default function HeaderPage() {
  return (
    <div>
      <div
        style={{
          width: '100%',
          background: '#258A1A',
          display: 'flex',
          justifyContent: 'space-evenly',
          fontSize: '20px',
          color: 'white',
          padding: '7px 15%'
        }}
      >
        <span
          style={{
            cursor: 'pointer'
          }}
        > Kênh người bán</span>
        <span
          style={{
            cursor: 'pointer'
          }}
        > Đóng góp ý kiến</span>
        <span
          style={{
            cursor: 'pointer'
          }}
        > Đóng góp ý kiến</span>
        <span
          style={{
            cursor: 'pointer'
          }}
        > Thay đổi ngôn ngữ</span>
      </div>
      <div
        style={{
          background: '#6EB566'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1% 7%'
          }}
        >

          <NavLink
            style={{
              fontSize: '48px',
              width: '10%',
              color: 'white'
            }}
            to="/">
            <span>LOGO</span>
          </NavLink>


          <SearchFunction />





          <div style={{marginTop: '10px', marginRight: '60px' , display :'flex', justifyContent: 'space-between', width: '10%'}}>
            <UserMenu />
            <CartEven />
          </div>
        </div>
        
      </div>

    </div>
  )
}
