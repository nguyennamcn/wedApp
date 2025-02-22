import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SlArrowDown } from "react-icons/sl";

const SearchFunction = () => {
  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      marginTop: '5px',
      display: 'flex',
      alignItems: 'center',
      padding : '0 10px',
      width: '65%',
      borderRadius: '30px',
    }}>
      <span style={{
        fontSize: '32px',
        padding: ' 0 5%',
        marginBottom: '10px'
      }}>
        Danh mục <SlArrowDown size={18} /> <span style={{ marginLeft: '10px', fontSize: '40px'}}>|</span>
      </span>
      <Input
        placeholder="Tìm..."
        bordered={false}
        style={{ 
          flex: 1, 
          background : 'transparent',
          color: 'black',
          fontSize: '24px',
        }}
      />
      <SearchOutlined style={{ color: 'white', fontSize: '18px', padding: '5px 30px', background : '#6EB566' , fontSize : '48px', borderRadius: '40px'}} />
    </div>
  );
};

export default SearchFunction;
