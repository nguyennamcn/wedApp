import React from "react";
import "./PaymentTest.css";

export default function PaymentTest() {
  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Thông tin đơn hàng */}
        <div className="form-section">
          <h2>Thông tin đơn hàng</h2>
          <input placeholder="Họ và tên" />
          <input placeholder="Số điện thoại" />
          <input placeholder="Địa chỉ" />
          <div className="select-group">
            <select>
              <option>Chọn Tỉnh/Thành</option>
            </select>
            <select>
              <option>Chọn Quận/Huyện</option>
            </select>
            <select>
              <option>Chọn Phường/Xã</option>
            </select>
          </div>
          <input placeholder="Ghi chú đơn hàng (nếu có)" />
          <div className="shipping-fee">Phí ship đơn hàng 20,000đ</div>

          <h3>Hình thức thanh toán</h3>
          <div className="payment-method">
            <label>
              <input type="radio" name="payment" defaultChecked />
              Thanh toán khi nhận hàng (COD)
            </label>
            <label>
              <input type="radio" name="payment" />
              Thanh toán Momo
            </label>
            <label>
              <input type="radio" name="payment" />
              Thẻ tín dụng/ ngân hàng
            </label>
          </div>
        </div>

        {/* Giỏ hàng */}
        <div className="cart-section">
          <h2>Giỏ hàng</h2>
          <div className="cart-item">
            <div>
              <p>Áo thun Unisex</p>
              <span>Size M</span>
            </div>
            <p>39,000đ</p>
          </div>
          <div className="cart-item">
            <div>
              <p>Quần short Unisex</p>
              <span>Size M</span>
            </div>
            <p>39,000đ</p>
          </div>

          <h3>Ưu Đãi Dành Cho Bạn</h3>
          <div className="voucher-box">
            <input placeholder="Nhập mã giảm giá" />
            <button>Áp dụng</button>
          </div>
          <div className="voucher-list">
            <span>XMARK</span>
            <span>XMARK</span>
            <span>XMARK</span>
          </div>

          <div className="summary">
            <div className="summary-row">
              <span>Tạm tính:</span>
              <span>78,000đ</span>
            </div>
            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <span>-20,000đ</span>
            </div>
            <div className="summary-row">
              <span>Giảm giá đơn hàng:</span>
              <span>-20,000đ</span>
            </div>
            <div className="summary-row total">
              <strong>Tổng:</strong>
              <strong>78,000đ</strong>
            </div>
          </div>

          <div className="place-order">
            <div>
              <p>COD - Thanh toán khi nhận hàng</p>
              <span>Giảm phí vận chuyển 20,000đ</span>
            </div>
            <button>Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
