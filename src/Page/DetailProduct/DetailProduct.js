import React, { useState } from "react";
import "./DetailProduct.css";
import img from "../../img/01.jpg";
import img2 from "../../img/02.jpg";
import img3 from "../../img/03.jpg";
import img4 from "../../img/04.jpg";
import OrtherProductShop from "./OrtherProductShop";
import ProductLike from "./ProductLike";
import { RiArrowDropLeftFill } from "react-icons/ri";

export default function DetailProduct() {
  const [selectedImage, setSelectedImage] = useState(img);
  const [showPopup, setShowPopup] = useState(false);
  const [zoom, setZoom] = useState(1); // mặc định không zoom

  const handleZoomIn = () => setZoom(prev => prev + 0.1);
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.1));
  return (
    <div style={{ padding: "2% 5%", backgroundColor: "#F6F6F6" }}>
      {/* Breadcrumb */}
      <div
        style={{
          marginBottom: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          padding: "10px",
          fontSize: "13px",
        }}
      >
        <span>xmark</span> <RiArrowDropLeftFill style={{fontSize: '32px'}} /> <span>Thời trang nam</span>
      </div>

      <div
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          padding: "2% 3%",
        }}
      >
        <div className="main-content">
          {/* Images */}
          <div className="image-section">
            <div className="thumbnail-grid">
              <div>
                <img
                  src={img}
                  className="thumb"
                  alt="Thumbnail 1"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
              <div>
                <img
                  src={img2}
                  className="thumb"
                  alt="Thumbnail 2"
                  onClick={() => setSelectedImage(img2)}
                />
              </div>
              <div>
                <img
                  src={img3}
                  className="thumb"
                  alt="Thumbnail 3"
                  onClick={() => setSelectedImage(img3)}
                />
              </div>
              <div>
                <img
                  src={img4}
                  className="thumb"
                  alt="Thumbnail 4"
                  onClick={() => setSelectedImage(img4)}
                />
              </div>
            </div>
            <img src={selectedImage} alt="Main" className="main-image" />
          </div>

          {/* Product Info */}
          <div className="info-section">
            <h1 className="product-title">
              Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn
              Quốc Nam Nữ Mặc Đẹp
            </h1>
            <div className="status">
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                Tình trạng:{" "}
              </span>
              <span className="badge">RẤT TỐT</span>
              <p className="stock">Chỉ có 1 sản phẩm</p>
            </div>
            <p
              style={{
                color: "black",
                fontSize: "14px",
                opacity: "0.5",
                fontWeight: "400",
                marginLeft: "5%",
              }}
            >
              Giá mua gốc: đ39.000
            </p>
            <p className="price" style={{ color: "black", marginLeft: "5%" }}>
              Giá bán lại: <span className="price">đ39.000</span>
            </p>
            <p className="detail-text">
              📍 Phường Nhật Tân, Quận Tây Hồ, Hà Nội
            </p>
            <p className="detail-text">📦 Cập nhật 1 ngày trước</p>
            <p className="detail-text">Size: L — Hướng dẫn chọn size</p>
            <p className="detail-text">
              Chiều dài ước tính: 44 -55 cm (tính từ cạp quần đến gấu quần)
            </p>

            <p
              style={{
                color: "black",
                fontSize: "14px",
                marginTop: "20px",
                marginBottom: "0px",
              }}
            >
              Vận chuyển & Trả hàng:
            </p>
            <p
              style={{
                color: "black",
                fontSize: "13px",
                fontWeight: "400",
                marginTop: "0px",
                paddingRight: "45%",
              }}
            >
              Miễn phí vận chuyển cho đơn hàng từ 89.000 VND trở lên. Đổi/trả
              hàng trong vòng 14 ngày để được hoàn tiền hoặc nhận tín dụng mua
              sắm. Có thể áp dụng phí đổi trả.{" "}
            </p>

            <div className="action-buttons">
              <button className="btn">THÊM VÀO GIỎ</button>
              <button className="btn buy">MUA NGAY</button>
            </div>

            <div className="questions">
              <button className="question-btn">
                Sản phẩm này còn không ạ?
              </button>
              <button className="question-btn">
                Sản phẩm này có màu khác không?
              </button>
            </div>
          </div>
        </div>
        {/* Seller Info */}
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="seller-info">
            <img src={img} className="avatar" alt="Thumbnail 1" />
            <div>
              <p
                style={{
                  color: "black",
                  fontSize: "14px",
                  margin: "0",
                }}
              >
                Shoppp
              </p>
              <p
                style={{
                  color: "black",
                  fontSize: "12px",
                  margin: "0",
                  fontWeight: "400",
                }}
              >
                Online 20 phút trước
              </p>
              <div className="seller-actions">
                <button className="chat-btn">💬 Chat ngay</button>
                <button className="shop-btn">👀 Xem shop</button>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", width: "40%" }}>
            <div style={{ width: "50%" }}>
              <p style={{ color: "#757575" }}>
                Đánh giá: <span className="highlight">114,4k</span>
              </p>
              <p style={{ color: "#757575" }}>
                Sản phẩm: <span className="highlight">80</span>
              </p>
            </div>
            <div style={{ width: "50%" }}>
              <p style={{ color: "#757575" }}>
                Tỉ lệ phản hồi: <span className="highlight">75%</span>
              </p>
              <p style={{ color: "#757575" }}>
                Người theo dõi: <span className="highlight">24k</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2
          style={{
            padding: "2% 5%",
            fontSize: "16px",
            backgroundColor: "#F6F6F6",
            marginBottom: "0",
          }}
        >
          CHI TIẾT SẢN PHẨM
        </h2>
        <p
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "400",
            padding: "1% 5%",
            margin: "0",
            background: "white",
          }}
        >
          Size XL. Chất nỉ mềm mại. Trần trám phao dày ấm. Màu xanh navy đẹp. Đồ
          mới cao. Không lỗi (làm cảm ơn mn)
        </p>

        <h3
          style={{
            padding: "2% 5%",
            fontSize: "16px",
            backgroundColor: "#F6F6F6",
            marginBottom: "0",
          }}
        >
          THÔNG SỐ CHI TIẾT
        </h3>
        <div className="specs">
          <div className="spec-row">
            <span className="spec-label">Tình trạng:</span>
            <span>Đã sử dụng</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Loại sản phẩm:</span>
            <span>Đồ nam</span>
          </div>
        </div>
      </div>
      <div>
        <OrtherProductShop />
      </div>
      <div>
        <ProductLike />
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            border: "none",
            outline: "none",
            background: "#6EB566",
            color: "white",
            padding: "1% 2%",
            fontSize: "14px",
            borderRadius: "50px",
          }}
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}
