import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import { useParams } from "react-router-dom";
import OrtherProductShop from "./OrtherProductShop";
import ProductLike from "./ProductLike";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { appService } from "../../service/appService";
import { useCart } from "../CartPage/CartContext";
import { notification } from "antd";

export default function DetailProduct() {
  const { id } = useParams(); // lấy product id từ URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const [startIndex, setStartIndex] = useState(0);
  const maxThumbnails = 6;

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

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

  const handleAddToCart = () => {
    const variant = product.productVariants[0];
    const cartProduct = {
      id: product.id || "unknown",
      name: product.productName,
      price: variant.resalePrice,
      image: product.productImageUrl[0],
      quantity: 1,
      size: variant.size,
      variantId: variant.id,
      shopId: product.shopId || "unknown",
      version: variant.version,
    };
    addToCart(cartProduct);
    setTimeout(() => {
      openNotification("success", "Thành công", "Đã thêm vào giỏ hàng!");
    }, 100);
    window.dispatchEvent(new Event("cart-updated"));
  };

  useEffect(() => {
    appService
      .getDetailProduct(id)
      .then((res) => {
        const data = res.data.metadata;
        console.log(data);
        setProduct(data);

        // Đặt ảnh đầu tiên làm ảnh chính
        if (data.productImageUrl && data.productImageUrl.length > 0) {
          setSelectedImage(data.productImageUrl[0]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy sản phẩm:", err);
        setLoading(false);
      });
  }, [id]);

  const conditionMap = {
    NEW: "Rất tốt",
    used: "Đã qua sử dụng",
    refurbished: "Tân trang",
  };

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div style={{ padding: "2% 5%", backgroundColor: "#F6F6F6" }}>
      {/* Breadcrumb */}
      {contextHolder}
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
              <span style={{
                marginLeft: 10
              }} className="badge">
               {conditionMap[product.productVariants[0].condition] || "Chưa rõ"}
              </span>
              <p className="stock">
                {product.productVariants[0].quantity > 0
                  ? `Còn ${product.productVariants[0].quantity} sản phẩm`
                  : "Hết hàng"}
              </p>
            </div>
            <p className="price" style={{ color: "black", marginLeft: "5%" }}>
              Giá bán lại:{" "}
              <span className="price">
                {product.productVariants[0].resalePrice} Đ
              </span>
            </p>
            <p className="price" style={{ color: "black", marginLeft: "5%", fontSize: 14, fontWeight: 400, opacity: 0.4 }}>
              Giá mua gốc:{" "}
              <span>
                {product.productVariants[0].originalPrice} Đ
              </span>
            </p>
            <p className="detail-text">
              {product.location || "Không rõ địa chỉ"}
            </p>
            <p className="detail-text">
              Cập nhật : {" "}
              {product.updatedAt && product.updatedAt.substring
                ? product.updatedAt.substring(0, 10)
                : "N/A"}
            </p>
            <p className="detail-text">
              Size: {product.productVariants[0].size || "Không có"}
            </p>

            <p style={{ color: "black", fontSize: "14px", marginTop: "20px" }}>
              Vận chuyển & Trả hàng:
            </p>
            <p style={{ fontSize: "13px", fontWeight: "400", color: "gray", paddingRight: '50%' }}>
              Miễn phí vận chuyển cho đơn hàng từ 89.000 VND trở lên. Đổi/trả hàng trong vòng 14 ngày để được hoàn tiền hoặc nhận tín dụng mua sắm. Có thể áp dụng phí đổi trả. 
            </p>

            <div className="action-buttons">
              <button className="btn" onClick={handleAddToCart}>
                THÊM VÀO GIỎ
              </button>
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
          style={{ display: "flex",  marginTop: "5%" , alignItems: 'center', gap: 30}}
        >
          <div style={{
            width: '30%'
          }} className="seller-info">
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
          <div style={{
            width: '15%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}>
              <p style={{
                color: 'black'
              }}>Đánh giá</p>
              <p style={{
                color: '#6EB566'
              }}>114,4k</p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}>
              <p style={{
                color: 'black'
              }}>Sản phẩm</p>
              <p style={{
                color: '#6EB566'
              }}>114,4k</p>
            </div>
          </div>
          <div style={{
            width: '15%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}>
              <p style={{
                color: 'black'
              }}>Tỉ lệ phản hồi</p>
              <p style={{
                color: '#6EB566'
              }}>114,4k</p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}>
              <p style={{
                color: 'black'
              }}>Người theo dõi</p>
              <p style={{
                color: '#6EB566'
              }}>114,4k</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2 style={{
          padding: '2% 5%'
        }} className="section-title">CHI TIẾT SẢN PHẨM</h2>
        <p style={{
          background: 'white',
          color: 'black',
          padding: '2% 5%'
        }} className="section-content">
          {product.description || "Không có mô tả."}
        </p>

        <h3 style={{
          color: 'black',
          padding: '1% 5%'
        }} className="section-title">THÔNG SỐ CHI TIẾT</h3>
        <div className="specs">
          <div className="spec-row">
            <span className="spec-label">Tình trạng:</span>
            <span>{conditionMap[product.condition] || "Không rõ"}</span>
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
        <button
          style={{
            border: "none",
          }}
          className="see-more-btn"
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}
