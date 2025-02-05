import React, { useRef } from "react";
import { Carousel, Button, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Meta } = Card;

const SearchCarousel = () => {
  const carouselRef = useRef();

  const products = [
    { id: 1, title: "Tất", price: "100.000đ", sold: "5k" },
    { id: 2, title: "Son", price: "200.000đ", sold: "2k" },
    { id: 3, title: "Quần ống rộng nữ", price: "300.000đ", sold: "1.5k" },
    { id: 4, title: "Ốp Iphone", price: "150.000đ", sold: "8k" },
    { id: 5, title: "Giấy ăn", price: "50.000đ", sold: "10k" }
  ];

  return (
    <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "10px", position: "relative" }}>
      {/* Tiêu đề */}
      <h3 style={{ fontWeight: "bold", color: "#ff7f50", marginBottom: "15px" }}>Tìm kiếm hàng đầu</h3>

      {/* Nút điều hướng bên trái */}
      <Button
        icon={<LeftOutlined />}
        style={{
          position: "absolute",
          left: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#ddd",
          borderBottomRightRadius: "50%",
          borderTopRightRadius: "50%",
          zIndex: 10
        }}
        onClick={() => carouselRef.current.prev()}
      />

      {/* Carousel */}
      <Carousel ref={carouselRef} autoplay dots={false} slidesToShow={5}>
        {products.map((product) => (
          <Card key={product.id} hoverable style={{ width: 150, textAlign: "center", borderRadius: "10px" }}>
            <div style={{ height: "150px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="https://via.placeholder.com/100" alt="product" />
            </div>
            <Meta title={product.title} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <div style={{ color: "red", fontWeight: "bold" }}>{product.price}</div>
              <div style={{ color: "gray", fontSize: "12px" }}>Đã bán {product.sold}</div>
            </div>
          </Card>
        ))}
      </Carousel>

      {/* Nút điều hướng bên phải */}
      <Button
        icon={<RightOutlined />}
        style={{
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#ddd",
          borderBottomLeftRadius: "50%",
          borderTopLeftRadius: "50%",
          zIndex: 10
        }}
        onClick={() => carouselRef.current.next()}
      />
    </div>
  );
};

export default SearchCarousel;
