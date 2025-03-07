import React, { useState, useRef } from "react";
import { Carousel, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { FaStar } from "react-icons/fa6";
import logo1 from "../../img/29.jpg";
import logo2 from "../../img/27.jpg";
import logo3 from "../../img/26.jpg";
import logo4 from "../../img/23.jpg";
import logo5 from "../../img/21.jpg";
import logo6 from "../../img/30.jpg";
import logo7 from "../../img/32.jpg";
import logo8 from "../../img/7.jpg";

const { Meta } = Card;

const CarousellFeedBack = () => {
  const carouselRef = useRef();

  const products = [
    {
      id: 1,
      title: "Vị trí",
      price: "Tác giả",
      image: logo1,
      des: "When there is insufficient content space, it can be used to save space in the form of a revolving door.",
      rate: 5,
    },
    {
      id: 2,
      title: "Vị trí",
      price: "Tác giả",
      image: logo2,
      des: "When there is insufficient content space, it can be used to save space in the form of a revolving door.",
      rate: 5,
    },
    {
      id: 3,
      title: "Vị trí",
      price: "Tác giả",
      image: logo3,
      des: "When there is insufficient content space, it can be used to save space in the form of a revolving door.",
      rate: 5,
    },
    {
      id: 4,
      title: "Vị trí",
      price: "Tác giả",
      image: logo4,
      des: "When there is insufficient content space, it can be used to save space in the form of a revolving door.",
      rate: 5,
    },
    {
      id: 5,
      title: "Vị trí",
      price: "Tác giả",
      image: logo5,
      des: "When there is insufficient content space, it can be used to save space in the form of a revolving door.",
      rate: 5,
    },
  ];

  return (
    <div style={{ borderRadius: "10px", position: "relative" }}>
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

      <Carousel
        ref={carouselRef}
        autoplay
        dots={false}
        slidesToShow={3}
        arrows={false}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ padding: "10px", marginRight: "15px" }}
          >
            <Card
              hoverable
              style={{
                width: "90%",
                textAlign: "center",
                border: "none",
                boxShadow: "none",
                background: "rgb(251, 245, 231)",
              }}
              cover={
                <div
                  style={{
                    position: "relative",
                    paddingTop: "100%",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
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
              <div>
                <div style={{ textAlign: "left", marginTop: "5px" }}>
                  {product.title}
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    marginTop: "5px",
                  }}
                >
                  {product.price}
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {product.des}
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  {[...Array(product.rate)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{ color: "#d3d322", fontSize: "20px" }}
                    />
                  ))}
                </div>
              </div>
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

export default CarousellFeedBack;
