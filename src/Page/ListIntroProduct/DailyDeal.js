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
        <div >
            {/* Tiêu đề */}
            <div style={{marginBottom: "10px", textAlign: "center"}}>
                <h3 style={{ fontWeight: "700", margin: 0 ,color: '#0C4006',fontSize: '32px'}}>Sản Phẩm Theo Trend</h3>
                
            </div>

            {/* Carousel chứa danh sách sản phẩm */}
            <div style={{ padding: "1%", background: "linear-gradient(45deg, #FFFFFF 0%, #DDE7DE 86%)", boxShadow: "1px 5px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
            <Carousel slidesToShow={6} dots={true}>
                {products.map((product) => (
                    <Card key={product.id} hoverable style={{ width: 120, textAlign: "center", boxShadow: "1px 5px 8px rgba(0, 0, 0, 0.1)"}}>
                        <div style={{ height: "30vh", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src="https://via.placeholder.com/100" alt="product" />
                        </div>
                        <div style={{ padding: "10%" }}>
                            <Meta  title={product.title} />
                            <div style={{
                                marginTop: '10px',
                            }}>
                                <div style={{ color: "green", fontWeight: "bold" }}>{product.price}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </Carousel>
            </div>
        </div>
    );
};

// Style cho đồng hồ đếm ngược
const timerStyle = {
    background: "#ddd",
    padding: "5px 10px",
    margin: "0 3px",
    fontSize: "18px",
    fontWeight: "bold",
};

export default DailyDeals;
