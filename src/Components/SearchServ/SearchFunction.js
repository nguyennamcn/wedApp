import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SlArrowDown } from "react-icons/sl";

const SearchFunction = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
    <div style={{width: '60%',}}>
      <div style={{ 
      backgroundColor: '#FFFFFF', 
      display: 'flex',
      alignItems: 'center',
      padding : '0px 10px',
      width: '100%',
      borderRadius: '30px',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.5s'
    }}> 
      <Input
        placeholder="Tìm..."
        bordered={false}
        style={{ 
          flex: 1, 
          background : 'transparent',
          color: 'black',
          fontSize: '18px',
        }}
      />
      <SearchOutlined 
      style={{ 
        color: 'white', 
        fontSize: '20px', 
        padding: '3px 10px', 
        background : '#6EB566' , 
        borderRadius: '40px',
        transition: 'all 0.5s'
        }} />
    </div>
    </div>
  );
};

export default SearchFunction;
