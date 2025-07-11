import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchResults.css";
import { appService } from "../../service/appService";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      fetchSearchResults(keyword, 1);
    }
  }, [keyword]);

  const fetchSearchResults = async (kw, page) => {
    try {
      const res = await appService.searchProducts({
        search: kw,
        currentPage: page,
        pageSize: 20,
      });
      console.log(res)
      const data = res.data.metadata.metadata || [];

      const mapped = data.map((p) => ({
        id: p.id,
        name: p.name,
        imageUrl: p.imageUrl || p.image || '',
        originalPrice: p.originalPrice || p.price || 0,
        salePrice: p.salePrice || p.discountedPrice || 0,
        discountPercent: p.discountPercent || 0,
      }));

      setProducts(mapped);
      setTotalPages(res.data.totalPages || 1);
      setCurrentPage(page);
    } catch (error) {
      console.error("❌ Lỗi tìm kiếm:", error);
    }
  };

  console.log(products)

  const onPageChange = (page) => {
    fetchSearchResults(keyword, page);
  };

  return (
    <div className="search-results-container">
      <h2 className="search-title">CÓ THỂ BẠN CŨNG THÍCH</h2>
      {products.length > 0 ? (
        <>
          <div className="product-grid">
            {products.map((product) => (
              <div
              onClick={() => navigate(`/product/${product.id}`)}
              className="product-card" key={product.id}>
                <img style={{
                  width: '100%'
                }} src={product.imageUrl} alt={product.name} />
                <h4>{product.name}</h4>
                <div className="price-info">
                  <span className="original-price">{product.originalPrice}₫</span>
                  <span className="sale-price">{product.salePrice}₫</span>
                  <span className="discount">-{product.discountPercent}%</span>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            total={totalPages * 20}
            pageSize={20}
            onChange={onPageChange}
            className="pagination"
          />
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>
          Không tìm thấy kết quả nào cho "{keyword}"
        </p>
      )}
    </div>
  );
}
