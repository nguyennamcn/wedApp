import React, { useState } from 'react';
import { Button, Dropdown, Space, Badge } from 'antd';
import { UserOutlined, ShoppingCartOutlined, SettingOutlined, QuestionCircleOutlined, LogoutOutlined, FileTextOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const userMenuItems = [
    {
      key: '0',
      label: (
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <NavLink to={'/login'} type="primary" style={{ width: '90%', backgroundColor: '#76B041', fontSize: '32px', padding  : '10px 100px', borderRadius: '50px', color: "white" }}>
            Đăng nhập
          </NavLink>
          <div style={{ color: 'gray', fontSize: '20px', marginTop: '5px' }}><NavLink style={{color:'gray'}} to={"/login"}>Đăng ký</NavLink></div>
        </div>
      ),
      disabled: false,
    },
    { key: 'divider1', type: 'divider' }, // Đường kẻ ngang
  
    {
      key: '1',
      label: (
        <div style={{fontSize: '20px', background: '#ECECEC', padding : '0'}}>Quản lý đơn hàng</div>
      ), 
      disabled: true,
    },
    {
      key: '2',
      label: <a href="/orders"><FileTextOutlined /> Đơn mua</a>,
    },
    {
      key: '3',
      label: <a href="/sales"><FileTextOutlined /> Đơn bán</a>,
    },
    { key: 'divider2', type: 'divider' },
  
    {
      key: '4',
      label:
      (
        <div style={{fontSize: '20px', background: '#ECECEC'}}>Ưu đãi, khuyến mãi</div>
      ), 
      disabled: true,
    },
    {
      key: '5',
      label: <a href="/offers">Ưu đãi của tôi</a>,
    },
    { key: 'divider3', type: 'divider' },
  
    {
      key: '6',
      label: (
        <div style={{fontSize: '20px', background: '#ECECEC',}}>Khác</div>
      ),
      disabled: true,
    },
    {
      key: '7',
      label: <a href="/settings"><SettingOutlined /> Cài đặt tài khoản</a>,
    },
    {
      key: '8',
      label: <a href="/help"><QuestionCircleOutlined /> Trợ giúp</a>,
    },
    {
      key: '9',
      label: <a href="/logout"><LogoutOutlined /> Đăng xuất</a>,
    },
  ];

const UserDropSign = () => {
    return (
        <div style={{ marginTop: '20px', marginRight: '60px' , display :'flex', justifyContent: 'space-between', width: '100%'}}>
            {/* User Dropdown */}
            <div>
                <Dropdown menu={{ items: userMenuItems }} placement="bottom" arrow >
                    <Button type="text" icon={<UserOutlined style={{ fontSize: '48px', color: 'white' }} />} />
                </Dropdown>
            </div>
        </div>
    );
};

export default UserDropSign;
