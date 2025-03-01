import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import '../../css/HomePage/ListIntro.css'

const ListIntro = () => {
  const carouselRef = React.useRef();

  return (
    <div style={{ position: "relative", width: "100%", margin: "auto" , padding: '30px 0'}}>
      {/* Nút điều hướng bên trái */}
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "0px",
          transform: "translateY(-50%)",
          background: "gray",
          border: "none",
          width: "50px",
          height: "50px",
          color: "white",
          cursor: "pointer",
          zIndex: 10,
          borderTopRightRadius: '50%',
          borderBottomRightRadius: '50%',
          fontSize: '32px'
        }}
        onClick={() => carouselRef.current.prev()}
      >
        <LeftOutlined/>
      </button>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        autoplay
        dots={{ className: "custom-dots" }}
        dotPosition="bottom"
      >
        <div>
          <div
            style={{
              height: "90vh",
              background: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="https://via.placeholder.com/800x200" alt="slide 1" />
          </div>
        </div>
        
        
      </Carousel>

      {/* Nút điều hướng bên phải */}
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "0px",
          transform: "translateY(-50%)",
          background: "gray",
          border: "none",
          width: "50px",
          height: "50px",
          color: "white",
          cursor: "pointer",
          zIndex: 10,
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          fontSize: '32px'
        }}
        onClick={() => carouselRef.current.next()}
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default ListIntro;
