import React, { useState } from "react";
import "./DetailPage.css"; // Import file CSS

export default function DetailPage() {
  const [selectedColor, setSelectedColor] = useState("Đen Trơn");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát",
    price: 39000,
    originalPrice: 70000,
    colors: ["Đen Trơn", "Trắng Trơn", "Đen Kẻ Gân", "Trắng Kẻ Gân"],
    sizes: ["M", "L", "XL"],
    image: "https://via.placeholder.com/300", // Thay bằng ảnh thực tế
  };

  return (
    <div className="container mt-4">
      <div style={{
        boxShadow: '10px 10px 8px 10px #888888',

      }}>ew</div>

      {/* Product Section */}
      <div className="row bg-white shadow-sm p-4 rounded">
        {/* Left: Product Image */}
        <div className="col-md-4 text-center">
          <img src={product.image} alt="Product" className="img-fluid rounded mb-3" />
          <div className="d-flex justify-content-center gap-2">
            <img src={product.image} alt="thumb" className="thumb-img" />
            <img src={product.image} alt="thumb" className="thumb-img" />
            <img src={product.image} alt="thumb" className="thumb-img" />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="col-md-8">
          <h2 className="product-title">{product.name}</h2>

          {/* Stock Status */}
          <p className="badge bg-success text-white fs-6">Còn hàng</p>

          {/* Price */}
          <div className="price-box">
            <span className="price">₫{product.price.toLocaleString()}</span>
            <span className="original-price">₫{product.originalPrice.toLocaleString()}</span>
          </div>

          {/* Select Color */}
          <div className="my-3">
            <p className="fw-bold">Màu sắc:</p>
            <div className="btn-group">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`btn btn-outline-dark ${selectedColor === color ? "active" : ""}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Select Size */}
          <div className="my-3">
            <p className="fw-bold">Size:</p>
            <div className="btn-group">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`btn btn-outline-dark ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="my-3">
            <p className="fw-bold">Số lượng:</p>
            <div className="input-group w-50">
              <button className="btn btn-secondary" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                -
              </button>
              <input type="text" className="form-control text-center" value={quantity} readOnly />
              <button className="btn btn-secondary" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <button className="btn btn-warning btn-lg me-3">Thêm vào giỏ</button>
            <button className="btn btn-success btn-lg">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
