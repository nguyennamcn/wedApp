import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, SettingOutlined, QuestionCircleOutlined, LogoutOutlined, FileTextOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


const UserDrop = ({ user, logoutBtn }) => {
    const navigate = useNavigate();

    const userMenuItems = [
        {
            key: '0',
            label: (
                <div style={{ textAlign: 'center', padding: '10px 120px' }}>
                    {/* {user.name} */} USER_NAME
                </div>
            ),
            disabled: false,
        },
        { key: 'divider1', type: 'divider' }, // Đường kẻ ngang

        {
            key: '1',
            label: (
                <div style={{ fontSize: '20px', background: '#ECECEC', padding: '0' }}>Quản lý đơn hàng</div>
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
                    <div style={{ fontSize: '20px', background: '#ECECEC' }}>Ưu đãi, khuyến mãi</div>
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
                <div style={{ fontSize: '20px', background: '#ECECEC', }}>Khác</div>
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
            label: <a href="/logout"><LogoutOutlined /> {logoutBtn}</a>,
        },
    ];

    const menuStyle = {
        background: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '4px',
        padding: '8px',
        position: 'relative',
        zIndex: 1000,
    }

    const itemStyle = {
        padding: '0px',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',
    };

    const itemHoverStyle = {
        backgroundColor: '#ccc',
    };

    return (
        // <Dropdown
        //     overlay={(
        //         <div style={menuStyle}>
        //             <div
        //                 style={itemStyle}
        //                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = itemHoverStyle.backgroundColor}
        //                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        //             >
        //                 {logoutBtn}
        //             </div>
        //             <div
        //                 style={itemStyle}
        //                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = itemHoverStyle.backgroundColor}
        //                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        //             >
        //                 <button onClick={() => navigate('/profile')} style={{ width: '120px', height: '32px', }}>Hồ Sơ</button>
        //             </div>
        //             <div
        //                 style={itemStyle}
        //                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = itemHoverStyle.backgroundColor}
        //                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        //             >
        //                 <button onClick={() => navigate('/changepass')} style={{ width: '120px', height: '32px', }}>Đổi mật khẩu</button>
        //             </div>
        //         </div>
        //     )}
        //     trigger={['click']}
        // >
        //     <a onClick={(e) => e.preventDefault()}>
        //         <Space>
        //             {/* {user.name} */}
        //             <DownOutlined />
        //         </Space>
        //     </a>
        // </Dropdown>

        <div style={{ marginTop: '20px', marginRight: '60px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {/* User Dropdown */}
            <div>
                <Dropdown menu={{ items: userMenuItems }} placement="bottom" arrow >
                    <Button type="text" icon={<UserOutlined style={{ fontSize: '48px', color: 'white' }} />} />
                </Dropdown>
            </div>
        </div>

    )
}


export default UserDrop;