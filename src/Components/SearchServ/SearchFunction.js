import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchFunction = () => {
  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      marginTop: '5px',
      borderRadius: '20px', 
      display: 'flex',
      alignItems: 'center',
      width: '300px' ,// Điều chỉnh kích thước theo ý bạn
      borderRadius: '30px',
      padding : '0 20px',
      width: '65%'
    }}>
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
