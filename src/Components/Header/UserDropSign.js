import React, { useState } from 'react';
import { Button, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, QuestionCircleOutlined, LogoutOutlined, FileTextOutlined } from '@ant-design/icons';
import ModalUser from '../Modal/ModalUser';

const UserDropSign = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const userMenuItems = [
    {
      key: '0',
      label: (
        <div style={{ textAlign: 'center'}}>
          <button
            onClick={openModal} // Gọi hàm mở modal
            style={{
              fontSize: '24px',
              background: '#6EB566',
              borderRadius: '10px',
              color: 'white',
            }}
          >
            Đăng nhập/Đăng ký
          </button>
        </div>
      ),
    },
    { key: 'divider1', type: 'divider' },
    {
      key: '1',
      label: <div style={{ fontSize: '20px', background: '#ECECEC' }}>Quản lý đơn hàng</div>,
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
      label: <div style={{ fontSize: '20px', background: '#ECECEC' }}>Ưu đãi, khuyến mãi</div>,
      disabled: true,
    },
    {
      key: '5',
      label: <a href="/offers">Ưu đãi của tôi</a>,
    },
    { key: 'divider3', type: 'divider' },
    {
      key: '6',
      label: <div style={{ fontSize: '20px', background: '#ECECEC' }}>Khác</div>,
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
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
      <Dropdown menu={{ items: userMenuItems }} placement="bottom" arrow>
        <Button type="text" icon={<UserOutlined style={{ fontSize: '32px', color: 'white' }} />} />
      </Dropdown>
      <ModalUser isOpen={isOpenModal} onClose={closeModal} />
    </div>
  );
};

export default UserDropSign;
