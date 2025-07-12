import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchResults.css";
import { appService } from "../../service/appService";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  const [newProducts, setNewProducts] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      fetchSearchResults(keyword);
    }
  }, [keyword]);

  const fetchSearchResults = async (kw) => {
    try {
      const res = await appService.searchProducts({
        search: kw,
        currentPage: 1,
        pageSize: 40,
      });
      const data = res.data.metadata.metadata || [];

      const mapped = data.map((p) => ({
        id: p.id,
        name: p.name,
        imageUrl: p.imageUrl || p.image || '',
        price: p.salePrice || p.discountedPrice || p.price || 0,
      }));

      setNewProducts(mapped.slice(0, 10));
      setBestDeals(mapped.slice(10, 20));
    } catch (err) {
      console.error("❌ Lỗi fetch:", err);
    }
  };

  const categoryTags = [
    "Trang phục thường ngày", "Dạ tiệc & Trang trọng", "Hoa xuân rực rỡ",
    "Trang phục du lịch", "Dự tiệc cưới", "Thời trang công sở"
  ];

  const filters = [
    "Kích thước", "Danh mục", "Bí quyết", "Phong cách", "Đầm dài",
    "Thương hiệu", "Mức giá", "Tình trạng", "Màu sắc", "Kiểu cổ áo",
    "Chất liệu", "Hoạ tiết", "Cỡ", "Cách sử dụng"
  ];

  const renderProductCard = (product) => (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
     className="product-card" key={product.id}>
      <img src={product.imageUrl} alt={product.name} />
      <p style={{color: 'black'}} className="product-name">{product.name}</p>
      <p className="product-price">{product.price.toLocaleString()}₫</p>
      <button className="add-btn">🛒</button>
    </div>
  );

  const renderProductSection = (title, products) => (
    <div className="product-section">
      <h3>{title}</h3>
      <div className="product-grid">
        {products.map(renderProductCard)}
      </div>
    </div>
  );

  return (
    <div className="search-page">
      <h2 className="page-title">Đầm thời trang nữ</h2>

      <div className="category-tags">
        {categoryTags.map((tag) => (
          <div style={{
            width: '15%'
          }} className="tag-card" key={tag}>
            <img src="data:image/jpeg;base64,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" alt={tag} />
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <div className="search-layout">
        <div className="sidebar-filter">
          <h3>Bộ lọc sản phẩm</h3>
          {filters.map((f) => (
            <div key={f} className="filter-item">
              <span>{f}</span> <span className="plus">+</span>
            </div>
          ))}
        </div>

        <div className="product-sections">
          {renderProductSection("Mới về", newProducts)}
          {renderProductSection("Giá tốt", bestDeals)}
        </div>
      </div>
    </div>
  );
}
