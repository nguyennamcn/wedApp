import React, { useState } from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

const ProductHot = () => {
    const [visibleItems, setVisibleItems] = useState(8);
    const totalItems = 20;

    const handleShowMore = () => {
        setVisibleItems(prev => Math.min(prev + 4, totalItems)); // Limit to 20 items
    };

    return (
        <div className="container">
            <div className="row" style={{ rowGap: "20px" }}>
                {[...Array(totalItems)].slice(0, visibleItems).map((_, colIndex) => (
                    <div className="col-3" key={colIndex}>
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
                ))}
            </div>
            {visibleItems < totalItems && (
                <div className="text-center mt-3">
                    <Button style={{color: 'white',background: '#FF9513', fontSize: '32px', padding: '25px 40px', borderRadius: '70px'}} onClick={handleShowMore}>Xem thêm</Button>
                </div>
            )}
        </div>
    );
};

export default ProductHot;
