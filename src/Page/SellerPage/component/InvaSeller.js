import React, { useEffect, useState } from "react";
import { orderService } from "../../../service/orderService";

const TABS = [
  { label: "Tất cả", status: "" },
  { label: "Chờ xác nhận", status: "WAITING_CONFIRMATION" },
  { label: "Chờ lấy hàng", status: "WAITING_PICKUP" },
  { label: "Đang giao", status: "DELIVERING" },
  { label: "Đã giao", status: "DELIVERED" },
  { label: "Trả hàng/Hoàn tiền/Hủy", status: "CANCELLED" },
];

export default function InvaSeller() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const criteria = {
          currentPage,
          pageSize,
          ...(statusFilter && { orderStatus: statusFilter }),
        };
        const res = await orderService.getAllOrder(criteria);
        setOrders(res.data.metadata.metadata || []);
      } catch (error) {
        console.error("Lỗi lấy danh sách đơn hàng:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [statusFilter, currentPage]);


  console.log(orders)

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: 16 }}>Quản lý đơn hàng</h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        {TABS.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setStatusFilter(tab.status);
              setCurrentPage(0);
            }}
            style={{
              padding: "8px 16px",
              border: "none",
              borderBottom:
                statusFilter === tab.status ? "3px solid green" : "3px solid transparent",
              background: "none",
              cursor: "pointer",
              color: statusFilter === tab.status ? "green" : "black",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Action bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
          alignItems: "center",
        }}
      >
        <div>
          <button style={buttonStyle}>📂 Bộ lọc</button>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={buttonStyle}>⇅ Sắp xếp theo</button>
          <button style={buttonStyle}>⎘ Xuất</button>
          <button style={buttonStyle}>⋯</button>
        </div>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
          background: "#fff",
        }}
      >
        <thead style={{ background: "#f9f9f9" }}>
          <tr>
            <th style={thStyle}><input type="checkbox" /></th>
            <th style={thStyle}>Đơn hàng</th>
            <th style={thStyle}>Khách hàng</th>
            <th style={thStyle}>Mặt hàng</th>
            <th style={thStyle}>Trạng thái đơn hàng</th>
            <th style={thStyle}>Phương thức vận chuyển</th>
            <th style={thStyle}>Cách giao hàng</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan="7" style={{ textAlign: "center" }}>Đang tải...</td></tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={tdStyle}><input type="checkbox" /></td>
                <td style={tdStyle}>#{order.orderCode}</td>
                <td style={tdStyle}>{order.customerName}</td>
                <td style={tdStyle}>
                  {order.orderItems?.map((item) => (
                    <div
                      key={item.productVariantId}
                      style={{ display: "flex", alignItems: "center", marginBottom: 4 }}
                    >
                      <img
                        src={item.image}
                        alt={item.productName}
                        width={40}
                        height={40}
                        style={{
                          objectFit: "cover",
                          marginRight: 8,
                          borderRadius: 4,
                        }}
                      />
                      <span>{item.productName}</span>
                    </div>
                  ))}
                </td>
                <td style={tdStyle}>{order.status}</td>
                <td style={tdStyle}>GHN</td>
                <td style={tdStyle}>Lấy tại kho</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 6 }}>
        {[0, 1, 2, 3, 4].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              padding: "6px 12px",
              backgroundColor: currentPage === page ? "green" : "white",
              color: currentPage === page ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontWeight: currentPage === page ? "bold" : "normal",
            }}
          >
            {page + 1}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12, color: "#888", textAlign: "right", marginTop: 12 }}>
        Chỉ hiển thị đơn hàng trong 12 tháng qua
      </p>
    </div>
  );
}

// Styles
const buttonStyle = {
  padding: "6px 12px",
  background: "#f0f0f0",
  border: "1px solid #ddd",
  borderRadius: 4,
  cursor: "pointer",
};

const thStyle = {
  textAlign: "left",
  padding: "10px 8px",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "8px",
  verticalAlign: "top",
};
