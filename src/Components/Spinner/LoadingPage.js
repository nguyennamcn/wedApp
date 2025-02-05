import React from "react";
import { Spin } from "antd";
// import logo from "./logo.png"; // Đặt logo trong thư mục public hoặc src
import './spinner.css'

const LoadingPage = () => {
  return (
    <div style={styles.container}>
      <Spin size="large" />
      <p style={styles.text}>Đang tải... Vui lòng chờ!</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    animation: "fadeIn 1s ease-in-out",
  },
  logo: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    animation: "bounce 1.5s infinite",
  },
  text: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#555",
    fontWeight: "bold",
  },
};

export default LoadingPage;
