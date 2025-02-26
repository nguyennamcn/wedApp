import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SlArrowDown } from "react-icons/sl";

const SearchFunction = () => {
  return (
    <div style={{width: '60%'}}>
      <div style={{ 
      backgroundColor: '#FFFFFF', 
      display: 'flex',
      alignItems: 'center',
      padding : '0 10px',
      width: '100%',
      borderRadius: '30px',
    }}> 
      <span style={{
        fontSize: '20px',
        padding: ' 0 5%',
      }}>
        Danh mục <SlArrowDown size={18} /> <span style={{ marginLeft: '10px', fontSize: '20px'}}>|</span>
      </span>
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
      <SearchOutlined style={{ color: 'white', fontSize: '18px', padding: '5px 15px', background : '#6EB566' , fontSize : '20px', borderRadius: '40px'}} />
    </div>
    </div>
  );
};

export default SearchFunction;
