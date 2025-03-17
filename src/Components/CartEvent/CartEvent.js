import React, { useState } from 'react';
import { Button, Dropdown, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './cart.css'


const CartEven = () => {
    const [cartItems, setCartItems] = useState([]); // 🛒 Mặc định giỏ hàng có 0 sản phẩm

    const cartMenuItems = cartItems.length
        ? cartItems.map((item, index) => ({
            key: index,
            label: `${item.name} (x${item.quantity})`,
        }))
        : [{ key: '0', label: 'Giỏ hàng trống' }];

    return (
        <div style={{ display :'flex', justifyContent: 'space-between',marginLeft: '15%'}}>
            {/* Giỏ hàng với số lượng sản phẩm */}
            <div>
                <Dropdown menu={{ items: cartMenuItems }} placement="bottomRight" arrow>
                    <span> 
                        <Badge count={cartItems.length} color="red">
                            <Button type="text" icon={<ShoppingCartOutlined style={{ fontSize: '24px', color: 'white' }} />} />
                        </Badge>
                    </span>
                </Dropdown>
            </div>
        </div>
    );
};

export default CartEven;
