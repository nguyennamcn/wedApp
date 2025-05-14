import React from "react";
import { Input, Select, Button } from "antd";

const { TextArea } = Input;

export default function DetailShop() {
  return (
    <div style={{ padding: "5%", background: "#E8F5E9", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "20px",
            background: "#6EB566",
          }}
        >

        </div>
        <div style={{width: '50%'}}>
          <h2 style={{ margin: 0 }}>HTT04</h2>
           <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Họ & tên: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Số CCCD: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Số điện thoại:  </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Email:  </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Hạng mục sản phẩm: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Mô tả cửa hàng: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Hình chụp của CCCD: </p>
           </div>
           <div>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Họ & tên: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Số CCCD: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Số điện thoại:  </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Email:  </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Hạng mục sản phẩm: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Mô tả cửa hàng: </p>
            <p style={{ margin: 0, color: "black", fontWeight: '400' , marginTop: '5%', fontSize: '16px'}}>Hình chụp của CCCD: </p>
           </div>
           </div>
        </div>
        
      </div>


      {/* Message & Actions */}
      <div>
        <TextArea
          rows={4}
          placeholder="Lời nhắn..."
          style={{ marginBottom: "20px" }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Select
            defaultValue="Chờ xét duyệt"
            options={[
              { value: "pending", label: "Chờ xét duyệt" },
              { value: "active", label: "Đang hoạt động" },
              { value: "rejected", label: "Từ chối" },
              { value: "locked", label: "Tạm khóa" },
              { value: "need_info", label: "Cần thêm thông tin" },
            ]}
            style={{ width: 180 }}
          />
          <Button type="primary" style={{ background: "#6EB566", borderColor: "#6EB566" }}>
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
}
