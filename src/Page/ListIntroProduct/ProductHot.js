import React, { useState } from 'react';
import { Card, Button, Tabs, Row, Col } from 'antd';
import { CameraOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import img from '../../img/EXE/1.png'; // Placeholder image

const { Meta } = Card;
const { TabPane } = Tabs;

const statuses = ['Tất cả', 'mới cập nhật', 'hot trend', 'handmade', 'tái sử dụng sáng tạo'];

// Tạo 40 sản phẩm mẫu
const generateProducts = () => {
  return Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    title: `Sản phẩm ${index + 1}`,
    condition: 'Tình trạng: 90%',
    price: '106.305',
    image: img,
    status: statuses[Math.floor(Math.random() * (statuses.length - 1)) + 1] // bỏ qua "Tất cả"
  }));
};

const ProductHot = () => {
  const allProducts = generateProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Tất cả');
  const pageSize = 12;

  // Lọc theo trạng thái nếu không phải 'Tất cả'
  const filteredProducts =
    selectedTab === 'Tất cả'
      ? allProducts
      : allProducts.filter(product => product.status === selectedTab);

  // Phân trang
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTabChange = (key) => {
    setSelectedTab(key);
    setCurrentPage(1);
  };

  return (
    <div style={{ padding: '5% 10%' }}>
      <h2 style={{ textAlign: 'center', color: 'green', fontStyle: 'italic' , fontSize: '30px', fontWeight: '700'}}>Sản Phẩm</h2>

      <Tabs activeKey={selectedTab} onChange={handleTabChange} centered>
        {statuses.map(status => (
          <TabPane
            tab={<span style={{ color: selectedTab === status ? 'green' : undefined, fontWeight: 'bold' }}>{status}</span>}
            key={status}
          />
        ))}
      </Tabs>

      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        {currentProducts.map((product) => (
          <Col xs={12} sm={8} md={6} lg={4} xl={4} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.image} />}
              actions={[<CameraOutlined key="view" />]}
            >
              <Meta title={product.title} description={product.condition} />
              <p style={{ color: 'green', fontWeight: 'bold', marginTop: 8 }}>
                ₫{product.price}
              </p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30, flexWrap: 'wrap' }}>
          <Button
            icon={<LeftOutlined />}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ margin: '0 5px' }}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              style={{
                margin: '0 5px',
                backgroundColor: currentPage === i + 1 ? 'green' : undefined,
                color: currentPage === i + 1 ? 'white' : undefined
              }}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </Button>
          ))}
          <Button
            icon={<RightOutlined />}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ margin: '0 5px' }}
          />
        </div>
      )}

      {filteredProducts.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: 50 }}>Không có sản phẩm thuộc nhóm này.</p>
      )}
    </div>
  );
};

export default ProductHot;
