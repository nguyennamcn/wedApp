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
          padding: "0 20%",
        }}
      >
        <ListIntro />



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
          <p style={{ fontSize: "32px", fontWeight: "700",  color: '#6EB566', margin: '7% 0' }}>
            Sản phẩm bán chạy
          </p>
          <ProductHot />
        </div>
      </div>
    </>
  );
}
