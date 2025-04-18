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
  const [ld, setld] = useState(false)
  const data = [
    {
      id: 1,
      name: 'Nữ',
      link: '/product',
    },
    {
      id: 2,
      name: 'Cao cấp',
      link: '/product',
    },
    {
      id: 3,
      name: 'Thiết kế',
      link: '/product',
    },
    {
      id: 4,
      name: 'Giày',
      link: '/product',
    },
    {
      id: 5,
      name: 'Túi xách',
      link: '/product',
    },
    {
      id: 6,
      name: 'Phụ kiện',
      link: '/product',
    },
    {
      id: 7,
      name: 'Cỡ lớn',
      link: '/product',
    },
    {
      id: 8,
      name: 'trẻ em',
      link: '/product',
    },
    {
      id: 9,
      name: 'Đồ bầu',
      link: '/product',
    },
    {
      id: 10,
      name: 'Thương hiệu',
      link: '/product',
    },
    {
      id: 11,
      name: 'Tư vấn phong cách',
      link: '/product',
    },
    {
      id: 12,
      name: 'Thẻ quà tặng',
      link: '/product',
    }
  ]

  const [mb, setMb] = useState(false);
    const [mp, setMp] = useState(false);
    const [ip, setIp] = useState(false);
    const [dt, setDt] = useState(false);
  
    useEffect(() => {
      const updateSlidesToShow = () => {
        const width = window.innerWidth;
  
        if (width < 480) {
          setIp(false);
          setMp(false);
          setMb(true);
          setDt(false);
        } else if (width < 768) {
          setIp(false);
          setMp(true);
          setMb(false);
          setDt(false);
        } else if (width < 1024) {
          setIp(true);
          setMp(false);
          setMb(false);
          setDt(false);
        } else {
          setIp(false);
          setMp(false);
          setMb(false);
          setDt(true);
        }
      };
  
      updateSlidesToShow(); // Cập nhật lần đầu
  
      window.addEventListener("resize", updateSlidesToShow); // Lắng nghe resize
  
      return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);
    
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
          fontSize: '14px',
          color: 'white',
          padding: '7px 5%',
        }}
      >
        <span style={{ cursor: 'pointer' }}> Kênh người bán</span>
        <span style={{ cursor: 'pointer' }}> Đóng góp ý kiến</span>
        <span style={{ cursor: 'pointer' }}> Hỗ trợ</span>
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
          padding:  '0px 10%',
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
        <div>
          {data.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: '500',
                marginRight: '3%',
                fontSize: '14px',
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Khoảng trống để tránh bị che mất nội dung */}
      <div style={{ marginTop: '10px' }}></div>
    </div>
  );
}
