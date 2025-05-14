import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const storeStatusList = [
  { name: "Shopppne", status: "Chờ xét duyệt", color: "#FFA500" }, // cam
  { name: "Shopppne", status: "Đang hoạt động", color: "#00C851" }, // xanh lá
  { name: "Shopppne", status: "Từ chối", color: "#ff4444" }, // đỏ
  { name: "Shopppne", status: "Tạm khóa", color: "#FF8800" }, // cam đậm
  { name: "Shopppne", status: "Cần thêm thông tin", color: "#33b5e5" }, // xanh dương
];

export default function Store() {
  return (
    <div style={{ padding: "30px", background: "#E8F5E9", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Input
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
          style={{ width: "250px", marginRight: "10px" }}
        />
        <Button icon={<FilterOutlined />} />
        <Button disabled style={{ marginLeft: "10px" }}>
          Quản lý cửa hàng
        </Button>
      </div>

      {/* Store Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {storeStatusList.map((store, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "15px 20px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>
                  Tên cửa hàng: {store.name}
                </p>
                <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: store.color,
                      display: "inline-block",
                    }}
                  ></span>
                  {store.status}
                </p>
              </div>
              <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>
                Ngày tạo: dd/mm/yyyy
              </p>
            </div>
            <Button type="link">XEM CHI TIẾT</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
