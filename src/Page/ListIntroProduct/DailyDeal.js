import React, { useState, useEffect } from "react";
import { Carousel, Card } from "antd";
import './dali.css'

const { Meta } = Card;

const DailyDeals = () => {
    // State cho bộ đếm thời gian
    const [timeLeft, setTimeLeft] = useState({
        hours: 7,
        minutes: 12,
        seconds: 5,
    });

    // Cập nhật bộ đếm thời gian mỗi giây
    

    const products = [
        { id: 1, title: "Bộ cây lau nhà", price: "₫106.305", sold: "6,1k" },
        { id: 2, title: "Bộ cây lau nhà", price: "₫106.305", sold: "6,1k" },
        { id: 3, title: "Bộ cây lau nhà", price: "₫106.305", sold: "6,1k" },
        { id: 4, title: "Bộ cây lau nhà3", price: "₫106.305", sold: "6,1k" },
        { id: 5, title: "Bộ cây lau nhà", price: "₫106.305", sold: "6,1k" },
        { id: 6, title: "Bộ cây lau nhà", price: "₫106.305", sold: "6,1k" },
    ];

    return (
        <div style={{ background: "#f5f5f5", padding: "15px", borderRadius: "10px" }}>
            {/* Tiêu đề */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h3 style={{ fontWeight: "bold", margin: 0 ,color: '#6EB566',fontSize: '20px'}}>Sản phẩm theo trend</h3>
                
            </div>

            {/* Carousel chứa danh sách sản phẩm */}
            <Carousel slidesToShow={6} dots={true}>
                {products.map((product) => (
                    <Card key={product.id} hoverable style={{ width: 120, textAlign: "center", borderRadius: "10px" ,}}>
                        <div style={{ height: "120px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src="https://via.placeholder.com/100" alt="product" />
                        </div>
                        <Meta title={product.title} />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px'
                        }}>
                            <div style={{ color: "red", fontWeight: "bold" }}>{product.price}</div>
                            <div style={{ color: "gray", fontSize: "10px" }}>Đã bán {product.sold}</div>
                        </div>
                    </Card>
                ))}
            </Carousel>
        </div>
    );
};

// Style cho đồng hồ đếm ngược
const timerStyle = {
    background: "#ddd",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "0 3px",
    fontSize: "18px",
    fontWeight: "bold",
};

export default DailyDeals;
