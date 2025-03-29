import React, { useState, useRef } from "react";
import { Carousel, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import logo1 from "../../img/29.jpg";
import logo2 from "../../img/27.jpg";
import logo3 from "../../img/26.jpg";
import logo4 from "../../img/23.jpg";
import logo5 from "../../img/21.jpg";
import logo6 from "../../img/30.jpg";
import logo7 from "../../img/32.jpg";
import logo8 from "../../img/7.jpg";

const { Meta } = Card;

const CarouselIntro = () => {
  const carouselRef = useRef();

  const products = [
    { id: 1, title: "Sản phẩm mới", price: "100.000đ", image: logo1, image2: logo2 },
    { id: 2, title: "Sản phẩm mới", price: "100.000đ", image: logo2, image2: logo3 },
    { id: 3, title: "Sản phẩm mới", price: "100.000đ", image: logo3, image2: logo4 },
    { id: 4, title: "Sản phẩm mới", price: "100.000đ", image: logo4, image2: logo5 },
    { id: 5, title: "Sản phẩm mới", price: "100.000đ", image: logo5, image2: logo6 },
    { id: 6, title: "Sản phẩm mới", price: "100.000đ", image: logo6, image2: logo7 },
    { id: 7, title: "Sản phẩm mới", price: "100.000đ", image: logo7, image2: logo8 },
    { id: 8, title: "Sản phẩm mới", price: "100.000đ", image: logo8, image2: logo1 },
  ];

  const [imageSrcs, setImageSrcs] = useState(products.map((product) => product.image));

  return (
    <div style={{ borderRadius: "10px", position: "relative" }}>
      <h1 style={{ color: "black", marginBottom: "50px", fontSize: "70px" , marginLeft: '15px'}}>Sản phẩm nổi bật</h1>

      <LeftOutlined
        onClick={() => carouselRef.current.prev()}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          color: "green",
          cursor: "pointer",
          zIndex: 1,
        }}
      />

      <Carousel ref={carouselRef} autoplay dots={false} slidesToShow={4} arrows={false}>
        {products.map((product, index) => (
          <div key={product.id} style={{ padding: "10px", marginRight: "15px" }}>
            <Card
              hoverable
              style={{ width: "100%", textAlign: "center", border: "none", boxShadow: "none" }}
              cover={
                <div style={{ position: "relative", paddingTop: "100%", backgroundColor: "#f8f8f8" }}>
                  <img
                    src={imageSrcs[index]}
                    alt={product.title}
                    onMouseEnter={() => {
                      const newImages = [...imageSrcs];
                      newImages[index] = product.image2;
                      setImageSrcs(newImages);
                    }}
                    onMouseLeave={() => {
                      const newImages = [...imageSrcs];
                      newImages[index] = product.image;
                      setImageSrcs(newImages);
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100%",
                      height: "auto",
                      transition: "opacity 0.5s ease-in-out", // 🔥 Hiệu ứng chuyển đổi mượt
                      opacity: 1,
                    }}
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "5px" }}>{product.title}</div>
              <div style={{ textAlign: "left", fontSize: "16px", marginTop: "5px" }}>{product.price}</div>
            </Card>
          </div>
        ))}
      </Carousel>

      <RightOutlined
        onClick={() => carouselRef.current.next()}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          color: "green",
          cursor: "pointer",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default CarouselIntro;
