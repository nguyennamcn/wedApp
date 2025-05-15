import React from "react";
import { Tabs, Empty } from "antd";
import "./Ivb.css"; // import CSS tuỳ chỉnh


const orders = [
  {
    id: 1,
    shopName: "Dodana",
    status: "Đã giao",
    statusText: "Giao hàng thành công",
    isDone: true,
    deliveryDate: "07/12/2025",
    total: 39000,
    product: {
      name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
      quantity: 1,
      color: "Đen",
      size: "M",
      image: "https://cf.shopee.vn/file/9b3b6c9cf074abf1d15757f4e145e9aa_tn", // ví dụ ảnh thật
    },
  },
  {
    id: 2,
    shopName: "Dodana",
    status: "Đã giao",
    statusText: "Giao hàng thành công",
    isDone: true,
    deliveryDate: "07/12/2025",
    total: 39000,
    product: {
      name: "Quần Short Unisex Basic Thể Thao Mặc Thoáng Mát Phong Cách Hàn Quốc Nam Nữ Mặc Đẹp",
      quantity: 1,
      color: "Đen",
      size: "M",
      image: "https://cf.shopee.vn/file/9b3b6c9cf074abf1d15757f4e145e9aa_tn",
    },
  },
];

export default function InvationBuy() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <Tabs
        defaultActiveKey="all"
        className="custom-tabs"
        items={[
          {
            key: "all",
            label: "Tất cả",
            children: <Empty description="Chưa có đơn hàng" />,
          },
          {
            key: "waitingpayment",
            label: "Chờ thanh toán",
            children: <Empty description="Chưa có đơn hàng" />,
          },
          {
            key: "waitingdelivered",
            label: "Chờ giao hàng",
            children: <Empty description="Chưa có đơn hàng" />,
          },
          { key: "delivered", label: "Đã giao", children: <DeliveredTab /> },
          {
            key: "cancelled",
            label: "Đã huỷ",
            children: <Empty description="Chưa có đơn hàng" />,
          },
          {
            key: "returned",
            label: "Trả lại",
            children: <Empty description="Chưa có đơn hàng" />,
          },
        ]}
      />
    </div>
  );
}

const DeliveredTab = () => {
  const deliveredOrders = orders.filter((order) => order.status === "Đã giao");

  return (
    <div style={{ padding: 20 }}>
      {deliveredOrders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #e5e5e5",
            marginBottom: 20,
            borderRadius: 6,
            overflow: "hidden",
            background: "#f6fff6",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 10,
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <strong>{order.shopName}</strong>
            </div>
            <div style={{ color: "green", fontWeight: "bold" }}>
              🚚 {order.statusText} –{" "}
              <span style={{ color: "#16a34a" }}>Hoàn thành</span>
            </div>
          </div>

          {/* Product */}
          <div style={{ display: "flex", padding: 10, background: "#fff" }}>
            <img
              src={order.product.image}
              alt="product"
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                marginRight: 10,
              }}
            />
            <div>
              <div style={{ fontWeight: 500 }}>{order.product.name}</div>
              <div style={{ color: "#666" }}>
                Phân loại: {order.product.color} / {order.product.size}
              </div>
              <div style={{ color: "#666" }}>x{order.product.quantity}</div>
            </div>
            <div style={{ marginLeft: "auto", fontWeight: "bold" }}>
              {order.total.toLocaleString("vi-VN")}₫
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              background: "#eaffea",
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              Đánh giá sản phẩm trước ngày <a href="#">{order.deliveryDate}</a>
            </div>
            <div>
              <button
                style={{
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: 4,
                }}
              >
                Đánh giá
              </button>
              <button style={{ marginLeft: 8, padding: "6px 12px" }}>
                Mua lại
              </button>
              <button style={{ marginLeft: 8, padding: "6px 12px" }}>
                Liên hệ người bán
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
