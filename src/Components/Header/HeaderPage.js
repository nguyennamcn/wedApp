import React, { useState, useEffect } from 'react';
import UserMenu from './UserMenu';
import { NavLink } from 'react-router-dom';
import '../../css/Header/headerDrop.css';
import SearchFunction from '../SearchServ/SearchFunction';
import CartEven from '../CartEvent/CartEvent';
import { appService } from '../../service/appService';
import LoadingPage from '../Spinner/LoadingPage';



export default function HeaderPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [ld, setld] = useState(true)

  useEffect(() => {
        const fetchProfile = async () => {
          try {
            const res = await appService.getProfile();
             setld(false)
          } catch (error) {
            setld(false)
            console.error("Lỗi khi lấy dữ liệu người dùng:", error);
          }
        };
    
        fetchProfile();
      }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1001,
          width: '100%',
    }}>
      {ld &&(
        <LoadingPage  />
      )}
      {/* Thanh trên cùng */}
      <div
        style={{
          width: '100%',
          background: '#6EB566',
          display: 'flex',
          justifyContent: 'space-evenly',
          fontSize: '12px',
          color: 'white',
          padding: '7px 15%',
          fontWeight: '600',
        }}
      >
        <span style={{ cursor: 'pointer' }}> Kênh người bán</span>
        <span style={{ cursor: 'pointer' }}> Đóng góp ý kiến</span>
        <span style={{ cursor: 'pointer' }}> Đóng góp ý kiến</span>
        <span style={{ cursor: 'pointer' }}> Thay đổi ngôn ngữ</span>
      </div>

      {/* Header chính */}
      <div
        style={{
          background: '#6EB566',
          position: 'fixed',
          top:  '30px',
          left: 0,
          width: '100%',
          zIndex: 1000,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          padding:  '0px 20%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a
            style={{
              fontSize:  '50px', // Logo nhỏ lại khi cuộn
              width: '20%',
              color: 'white',
              fontWeight: '500',
              transition: 'font-size 0.3s ease-in-out',
            }}
            href='/home'
          >
            <span className='font-xmark'>xmark</span>
          </a>

          <SearchFunction />

          <div style={{ display: 'flex', alignItems: 'center', width: '20%',justifyContent: 'end'}}>
            <UserMenu />
            <CartEven />
          </div>
        </div>
      </div>

      {/* Khoảng trống để tránh bị che mất nội dung */}
      <div style={{ marginTop: '110px' }}></div>
    </div>
  );
}
