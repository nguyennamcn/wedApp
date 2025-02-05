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
          background: '#636F0433',
          display: 'flex',
          justifyContent: 'end',
          fontSize: '28px',
          color: 'white'
        }}
      >
        <NavLink style={{ color: 'white' }}>
          <span> Đóng góp ý kiến</span>
        </NavLink>
        <span
          style={{
            margin: '0 10% 0 5%',
            cursor: 'pointer'
          }}
        > Thay đồi ngôn ngữ</span>
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
            padding: '0 7%'
          }}
        >

          <NavLink
            style={{
              fontSize: '48px',
              width: '10%'
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
        <div>
          <MenuAll />
        </div>
      </div>

    </div>
  )
}
