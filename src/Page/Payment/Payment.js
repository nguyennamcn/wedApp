import React, { useState, useEffect } from "react";
import "./Payment.css";
import ProductLike from "../DetailProduct/ProductLike";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  // Load cart từ localStorage khi trang load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Cập nhật localStorage khi cartItems thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Chọn tất cả hoặc bỏ chọn
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cartItems.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Chọn từng sản phẩm
  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const isAllSelected = selectedItems.length === cartItems.length;

  // Tính tổng tiền các item được chọn
  const total = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  // Tăng/giảm số lượng
  const updateQuantity = (id, change) => {
    console.log("Update quantity for id:", id);
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = (item.quantity || 1) + change;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const deleteItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2% 5%",
          backgroundColor: "#f8f8f8",
          boxSizing: "border-box",
          gap: "2%",
        }}
      >
        <div className="cart-section">
          <div className="select-all">
            <input
              style={{ width: "16px", height: "16px" }}
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAll}
            />
            <span>Chọn tất cả ({selectedItems.length})</span>
          </div>
          <hr />
          {cartItems.map((item) => (
            <div className="cart-item" 
            
            key={item.id}>
              <input
                style={{ width: "16px", height: "16px" }}
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
              />
              <img
              onClick={() => navigate(`/product/${item.id}`)}
              src={item.image} alt={item.name} />
              <div className="item-info">
                <div onClick={() => navigate(`/product/${item.id}`)} className="item-name"
                  style={{
                    cursor: "pointer",
                  }}
                  >{item.name}</div>
                <div className="item-color">{item.color}</div>
                <div className="quantity">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      outline: "none",
                    }}
                  >
                    -
                  </button>
                  <input
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      width: "30px",
                      textAlign: "center",
                    }}
                    type="text"
                    value={item.quantity || 1}
                    readOnly
                  />
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      outline: "none",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="item-price">
                {(item.price * (item.quantity || 1)).toLocaleString()}₫
              </div>
              <button
                onClick={() => deleteItem(item.id)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                className="delete"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div>
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
            <div style={{ marginBottom: "5%" }} className="summary-row total">
              <span>Tổng cộng:</span>
              <span>{total.toLocaleString()}₫</span>
            </div>

            <h4>Ước tính thời gian giao hàng</h4>
            <div className="shipping">
              <select
                style={{
                  padding: "10px 0",
                  borderRadius: "5px",
                  outline: "none",
                  width: "45%",
                }}
              >
                <option>Chọn tỉnh/ thành phố</option>
              </select>
              <select
                style={{
                  padding: "10px 0",
                  borderRadius: "5px",
                  outline: "none",
                  width: "45%",
                }}
              >
                <option>Chọn quận/ huyện</option>
              </select>
            </div>

            <input
              style={{
                padding: "10px 10px",
                borderRadius: "5px",
                outline: "none",
                width: "100%",
                marginBottom: "5%",
              }}
              type="text"
              placeholder="Nhập mã khuyến mãi nếu có"
              className="coupon"
            />
            <button 
            onClick={() => navigate('/payment')}
            className="checkout-btn">THANH TOÁN NGAY</button>
          </div>
        </div>
      </div>

      <div style={{ padding: "10%" }}>
        <ProductLike />
      </div>
    </>
  );
}
