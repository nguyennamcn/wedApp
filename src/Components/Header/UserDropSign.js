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
              outline: 'none'
            }}
          >
            Đăng nhập/Đăng ký
          </button>
        </div>
      ),
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
