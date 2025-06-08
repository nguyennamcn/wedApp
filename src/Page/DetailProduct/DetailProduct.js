import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import { useParams } from "react-router-dom";
import OrtherProductShop from "./OrtherProductShop";
import ProductLike from "./ProductLike";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { appService } from "../../service/appService";

export default function DetailProduct() {
  const { id } = useParams(); // lấy product id từ URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [startIndex, setStartIndex] = useState(0);
  const maxThumbnails = 5;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (
      product.productImageUrl &&
      startIndex + maxThumbnails < product.productImageUrl.length
    ) {
      setStartIndex(startIndex + 1);
    }
  };

  useEffect(() => {
    appService
      .getDetailProduct(id)
      .then((res) => {
        console.log(res.data.metadata);
        setProduct(res.data.metadata);
        if (res.data.images && res.data.images.length > 0) {
          setSelectedImage(res.data.images[0]); // ảnh đầu tiên là ảnh chính
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy sản phẩm:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

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
        <span>{product.category || "Danh mục"}</span>{" "}
        <RiArrowDropLeftFill style={{ fontSize: "32px" }} />{" "}
        <span>{product.name}</span>
      </div>

      <div style={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)", padding: "2% 3%" }}>
        <div className="main-content">
          {/* Images */}
          <div className="image-section">
            <div className="thumbnail-grid">
              {product.productImageUrl &&
                product.productImageUrl.length > maxThumbnails && (
                  <button className="scroll-btn up" onClick={handlePrev}>
                    ↑
                  </button>
                )}

              {(product.productImageUrl || [])
                .slice(startIndex, startIndex + maxThumbnails)
                .map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      className="thumb"
                      alt={`Thumbnail ${startIndex + idx + 1}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}

              {product.productImageUrl &&
                product.productImageUrl.length > maxThumbnails && (
                  <button className="scroll-btn down" onClick={handleNext}>
                    ↓
                  </button>
                )}
            </div>

            <img
              style={{ height: "auto" }}
              src={selectedImage}
              alt="Main"
              className="main-image"
            />
          </div>

          {/* Product Info */}
          <div className="info-section">
            <h1 className="product-title">{product.productName}</h1>
            <div className="status">
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                Tình trạng:
              </span>
              <span className="badge">{product.condition || "Chưa rõ"}</span>
              <p className="stock">
                {product.quantity > 0
                  ? `Còn ${product.quantity} sản phẩm`
                  : "Hết hàng"}
              </p>
            </div>
            <p className="price" style={{ color: "black", marginLeft: "5%" }}>
              Giá: <span className="price">đ{product.price}</span>
            </p>
            <p className="detail-text">
              📍 {product.location || "Không rõ địa chỉ"}
            </p>
            <p className="detail-text">
              📦 Cập nhật{" "}
              {product.updatedAt && product.updatedAt.substring
                ? product.updatedAt.substring(0, 10)
                : "N/A"}
            </p>
            <p className="detail-text">Size: {product.size || "Không có"}</p>

            <p style={{ color: "black", fontSize: "14px", marginTop: "20px" }}>
              Vận chuyển & Trả hàng:
            </p>
            <p style={{ fontSize: "13px", fontWeight: "400" }}>
              Miễn phí vận chuyển cho đơn hàng từ 89.000 VND trở lên. Đổi/trả
              hàng trong vòng 14 ngày để được hoàn tiền hoặc tín dụng mua sắm.
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

        {/* Seller Info (có thể sửa tiếp khi có dữ liệu shop) */}
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="seller-info">
            <img
              src={product.productImageUrl[0]}
              className="avatar"
              alt="Shop"
            />
            <div>
              <p style={{ fontSize: "14px", color: "black" }}>
                {product.productName || "Shop"}
              </p>
              <p style={{ fontSize: "12px", color: "gray" }}>
                Online chưa xác định
              </p>
              <div className="seller-actions">
                <button className="chat-btn">💬 Chat ngay</button>
                <button className="shop-btn">👀 Xem shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2 className="section-title">CHI TIẾT SẢN PHẨM</h2>
        <p className="section-content">
          {product.description || "Không có mô tả."}
        </p>

        <h3 className="section-title">THÔNG SỐ CHI TIẾT</h3>
        <div className="specs">
          <div className="spec-row">
            <span className="spec-label">Tình trạng:</span>
            <span>{product.condition}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Loại sản phẩm:</span>
            <span>{product.category}</span>
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
        <button className="see-more-btn">Xem thêm</button>
      </div>
    </div>
  );
}
