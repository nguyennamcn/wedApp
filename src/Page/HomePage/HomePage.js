import React, { useEffect, useState } from "react";
import ListIntro from "../ListIntroProduct/ListIntro";
import DailyDeals from "../ListIntroProduct/DailyDeal";
import SearchCarousel from "../ListIntroProduct/SearchCarousel";
import ProductHot from "../ListIntroProduct/ProductHot";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          padding: "0 140px",
        }}
      >
        <ListIntro />

        {/* menu back */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "19%",
              background: "#D9D9D9",
              textAlign: "center",
              borderRadius: "10px",
              padding: "20px 0",
            }}
          >
            Giao hàng nhanh
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "19%",
              background: "#D9D9D9",
              textAlign: "center",
              borderRadius: "10px",
              padding: "20px 0",
            }}
          >
            Hỗ trợ nhiệt tình
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "19%",
              background: "#D9D9D9",
              textAlign: "center",
              borderRadius: "10px",
              padding: "20px 0",
            }}
          >
            Giá rẻ chất lượng
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "19%",
              background: "#D9D9D9",
              textAlign: "center",
              borderRadius: "10px",
              padding: "20px 0",
            }}
          >
            Thanh toán an toàn
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "19%",
              background: "#D9D9D9",
              textAlign: "center",
              borderRadius: "10px",
              padding: "20px 0",
            }}
          >
            Cam kết hình thật
          </motion.div>
        </div>
        {/* end menu back */}

        <div
          style={{
            margin: "40px 0",
            background: "#D9D9D9",
            height: "10vh",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src="https://www.facebook.com/photo/?fbid=1125449509224908&set=a.541250964311435&__cft__[0]=AZW5fpdBvfpzN7ISq2cBX9jFkPknrxvVArNaC6mP7lgu48xJnHg4rStoFGdDwcXn_I7c_c60drGZD7yKM5HmFNt-A1RwtQNnLh78WtC6eECGf_D5ws4eBZ1Si0YROK5v2hTKiMoluDMxgKd20Qj6j1rvw-nY8soOkiHVpViMhc41Ah0yQ197emdrkabK4dWwJt9TNrxu9TnCd7laW4Kjlgh3TewyxHYJZO7kFjltSTi7tA&__tn__=EH-R"
            alt="logo"
          />
        </div>

        <div
          style={{
            margin: "40px 0",
          }}
        >
          <DailyDeals />
        </div>

        <div>
          <SearchCarousel />
        </div>
        <div
          style={{
            margin: "40px 0",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "32px", fontWeight: "700" }}>
            Sản phẩm bán chạy
          </p>
          <ProductHot />
        </div>
      </div>
    </>
  );
}
