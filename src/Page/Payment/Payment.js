import React, { useState } from 'react';
import './Payment.css';
import ProductLike from '../DetailProduct/ProductLike';

export default function Payment() {
  const initialCartItems = [
    {
      id: 1,
      name: 'Quần Short Unisex Basic Thể Thao M...',
      color: 'Đen / M',
      price: 39000,
      image: 'https://via.placeholder.com/80x80?text=Đen',
    },
    {
      id: 2,
      name: 'Quần Short Unisex Basic Thể Thao M...',
      color: 'Trắng / L',
      price: 39000,
      image: 'https://via.placeholder.com/80x80?text=Trắng',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState(
    initialCartItems.map(item => item.id)
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cartItems.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const isAllSelected = selectedItems.length === cartItems.length;

  const total = cartItems
    .filter(item => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <div className="payment-container">
      <div className="cart-section">
        <div className="select-all">
          <input
            style={{
              width: '16px',
              height: '16px',
            }}
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
          />
          <span>Chọn tất cả ({selectedItems.length})</span>
        </div>
        <hr />
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <input
              style={{
                width: '16px',
                height: '16px',
              }}
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-color">{item.color}</div>
              <div className="quantity">
                <button
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                }}
                >-</button>
                <input 
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}
                type="text" value="1" readOnly />
                <button
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                }}
                >+</button>
              </div>
            </div>
            <div className="item-price">{item.price.toLocaleString()}₫</div>
            <button 
            style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
            }}
            className="delete">×</button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Thông tin đơn hàng</h3>
        <div className="summary-row">
          <span>Tạm tính:</span>
          <span>{total.toLocaleString()}₫</span>
        </div>
        <div className="summary-row">
          <span>Giảm giá:</span>
          <span>0₫</span>
        </div>
        <div
        style={{
            marginBottom: '5%'
        }}
        className="summary-row total">
          <span>Tổng cộng:</span>
          <span>{total.toLocaleString()}₫</span>
        </div>

        <h4>Ước tính thời gian giao hàng</h4>
        <div className="shipping">
          <select style={{
            padding: '10px 0',
            borderRadius: '5px',
            outline: 'none',
            width: '45%',
          }}>
            <option>Chọn tỉnh/ thành phố</option>
          </select>
          <select style={{
            padding: '10px 0',
            borderRadius: '5px',
            outline: 'none',
            width: '45%',
          }}>
            <option>Chọn quận/ huyện</option>
          </select>
        </div>

        <input
            style={{
                padding: '10px 10px',
                borderRadius: '5px',
                outline: 'none',
                width: '100%',
                marginBottom: '5%',
            }}
          type="text"
          placeholder="Nhập mã khuyến mãi nếu có"
          className="coupon"
        />
        <button className="checkout-btn">THANH TOÁN NGAY</button>
      </div>
      
    </div>
      <div style={{
        padding: '10%', 
      }}>
        <ProductLike />       
      </div> 
    </>
  );
}
