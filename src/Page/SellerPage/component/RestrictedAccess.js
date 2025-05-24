import React from 'react'

export default function RestrictedAccess() {
  return (
    <div
      style={{
        minHeight: "90vh", // hoặc height: '100%' nếu cha đủ cao
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#555",
      }}
    >
      <img
        src="/lock-icon.svg" // thay bằng hình bạn dùng
        alt="Access Restricted"
        style={{ width: "120px", height: "120px", marginBottom: "20px" }}
      />
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
        Quyền truy cập bị hạn chế
      </h2>
      <p style={{ maxWidth: "400px", fontSize: "14px" }}>
        Bạn không thể thực hiện hành động này do tài khoản của bạn chưa được cấp quyền trên trang. Vui lòng liên hệ với quản trị viên hoặc chủ sở hữu tài khoản để được cấp quyền. Xin cảm ơn!
      </p>
    </div>
  );
}


