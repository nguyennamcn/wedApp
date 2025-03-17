import React, { useEffect } from "react";
import "./styles.css";
import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import logo from "../../img/34.png";
import logo1 from "../../img/9.jpg";
import CarouselIntro from "./CarouselIntro";
import { AiFillSmile } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import CarousellFeedBack from "./CarousellFeedBack";

export default function IntroPage() {
  const nagivate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Hiệu ứng kéo dài 1 giây
  }, []);

  const onClick = () =>{
    nagivate('/home')
    window.location.reload()
  }

  return (
    <>
      {/* Header */}
      <div className="header-intro">
        <div className="header-container">
          <span className="font-xmark">xmark</span>
          <div className="header-right">
            <div className="language">
              <FaGlobe className="icon iconglo" />
              <span>VI - Vietnamese</span>
            </div>
            <div className="cart">
              <FaShoppingCart className="icon cart-icon" />
            </div>
            <button onClick={onClick} className="menu-button">Tới trang mua sắm</button>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="intro-page" >
        <div className="container-intro">
          <h1 className="allura-regular" style={{ fontSize: "91px" }}>Thời trang vượt thời gian</h1>
          <p
            style={{ letterSpacing: "1px", marginTop: "1%", fontSize: "16px",fontWeight: '300' }}
          >
            Khám phá xu hướng thời trang mới nhất từ xmark. Nâng tầm tủ đồ của bạn với những bộ <br /> sưu tập ấn tượng của chúng tôi
          </p>
          <div
            style={{
              background: "white",
              width: "67%",
              borderRadius: "60px",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 13px",
              marginTop: "2%",
              marginBottom: "1.5%",
            }}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <span style={{ marginLeft: "8px" }}>áo thun nam</span>
            <div>
              <img style={{ width: "20%" }} src={logo} alt="img" />
              <button
                style={{
                  border: "none",
                  padding: "10px 25px",
                  background: "#3F7652",
                  color: "white",
                  borderRadius: "30px",
                  letterSpacing: "3px",
                  marginLeft: "18px",
                }}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div
        className="banner-intro"
        style={{ padding: "6% 5%" }}
        // data-aos="zoom-out-down"
        // data-aos-delay="300"
      >
        <CarouselIntro />
      </div>

      {/* Special Offers */}
      <div
        className="officer-intro"
        style={{
          padding: "5%",
          display: "flex",
        }}
        data-aos="zoom-in"
      >
        <img
          style={{ width: "58%" }}
          src={logo1}
          alt=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        />
        <div style={{ padding: "8% 0%", textAlign:'center', width:'42%', letterSpacing: '3px' }} data-aos="fade-down-left" data-aos-delay="800">
          <h2 style={{ fontSize: "40px" }}>Chương trình</h2>
          <h1 style={{ fontSize: "60px" }}>KHUYẾN MÃI</h1>
          <button
            style={{
              marginTop: "40%",
              padding: "10px 45px",
              background: "#2E7D32",
              border: "none",
              color: "white",
              borderRadius:'50px',
              fontSize: '30px'
            }}
          >
            Mua sắm ngay
          </button>
        </div>
      </div>

      {/* Tầm nhìn */}
      <div
        className="officer-intro2"
        style={{
          padding: "4% 5%",
          display: "flex",
        }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div
          style={{ width: "42%",textAlign: 'center', padding:'10% 0', letterSpacing:  '5px' }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          <h1 style={{ fontSize: "40px",color:'#1B5E20' }}>Lợi ích của </h1>
          <h1 style={{ fontSize: "42px",color:'#1B5E20' }}>ĐỒ SECOND HAND </h1>
          <button
            style={{
              marginTop: "40%",
              padding: "10px 45px",
              background: "#2E7D32",
              border: "none",
              color: "white",
              borderRadius:'50px',
              fontSize: '30px'
            }}
          >
            Tìm hiểu ngay
          </button>
        </div>
        <img
          style={{ width: "58%" }}
          src={logo1}
          alt=""
          // data-aos="zoom-out-left"
          // data-aos-delay="400"
        />
      </div>

      {/* Guest */}
      <div
        className="guest-intro"
        style={{ padding: "4% 5%"}}
        data-aos="fade-in"
      >
        <h1 style={{ fontSize: "73px" , textAlign: 'center'}}>Khách hàng</h1>
        <div>
          <hr style={{
            border: '1px solid black',
            width: '2%'
          }} />
          
        </div>
        <p style={{textAlign: 'center', color: 'black', marginTop: '3%'}}>This is your Team section. Briefly introduce the team then add their bios below.</p>
        <div>
          <CarousellFeedBack />
        </div>
      </div>

      {/* Footer */}
      <div className="footer-intro" data-aos="fade-in">
        <div className="footer-left">
          <h1 className="logo">xmark</h1>
          <p className="slogan">Green Vibes Only</p>
        </div>
        <div className="footer-right">
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
          <p>500 Terry Francine Street, 6th Floor, San Francisco, CA 94158</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLink />
            <FaLink />
          </div>
        </div>
      </div>
    </>
  );
}
