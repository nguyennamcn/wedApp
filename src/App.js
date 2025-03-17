import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import ErrorPage from "./Page/ErrolPage/ErrorPage";
import LoadingPage from "./Components/Spinner/LoadingPage"; 
import Layout from "./Layout/Layout";
import DetailPage from "./Page/DetailPage/DetailPage";
import SettingPage from "./Page/UserPage/SettingPage";
import LayoutUser from "./Layout/LayoutUser";
import ProtectedRoute from "./Components/Protectedroute/ProtectedRoute";
import IntroPage from "./Page/IntroPage/IntroPage";
import LoginPageTest from "./Page/AdminPage/LoginPageTest";
import AddressPage from "./Page/UserPage/AddressPage";
import RegisterSeller from "./Page/SellerPage/RegisterSeller";
import { notification } from "antd";
import ChangePass from "./Page/UserPage/ChangePass";

function App() {
  const [api, contextHolder] = notification.useNotification();
  const [attempts, setAttempts] = useState(0);

  const openNotification = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };
  // useEffect(() => {
  //   let violationCount = 0;
  //   // 🛑 Chặn phím tắt mở DevTools & View Source
  //   const handleKeyDown = (event) => {
  //     if (
  //       event.key === "F12" || 
  //       (event.ctrlKey && event.shiftKey && event.key === "I") || 
  //       (event.ctrlKey && event.key === "U") ||
  //       (event.ctrlKey && event.shiftKey && event.key === "J") // Chặn Ctrl+Shift+J (Console)
  //     ) {
  //       violationCount++;
  //       setAttempts(violationCount);
  //       openNotification(
  //         "warning",
  //         "Cảnh báo!",
  //         "🚨 Hệ thống đã chặn truy cập trái phép! 🚨"
  //       );
  //       if (violationCount >= 3) {
  //         alert("Hệ thống phát hiện hành vi đáng ngờ! Bạn sẽ bị chuyển hướng.");
  //         window.location.href = "https://www.tiktok.com/@nigauxam/video/7264434587726581000";
  //       }
  //       event.preventDefault();
  //     }
  //   };

  //   // 🛑 Chặn chuột phải
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //     violationCount++;
  //     setAttempts(violationCount);
  //     openNotification(
  //       "warning",
  //       "Cảnh báo!",
  //       "🚨 Bạn không được phép sử dụng chuột phải trên trang này!"
  //     );
  //     if (violationCount >= 3) {
  //       alert("Hệ thống phát hiện hành vi đáng ngờ! Bạn sẽ bị chuyển hướng.");
  //       window.location.href = "https://www.tiktok.com/@nigauxam/video/7264434587726581000";
  //     }
  //   };

  //   // 🛑 Phát hiện DevTools và chuyển hướng trang
  //   const detectDevTools = () => {
  //     const threshold = 160;
  //     if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
  //       openNotification(
  //         "warning",
  //         "Cảnh báo!",
  //         "🚨 Hệ thống phát hiện Developer Tools! Truy cập bị từ chối. 🚨"
  //       );
  //       window.location.href = "about:blank";
  //     }
  //   };

  //   const interval = setInterval(detectDevTools, 1000); // Kiểm tra DevTools mỗi giây

  //   // 🛑 Vô hiệu hóa inspect bằng console.log
  //   setInterval(() => {
  //     console.clear();
  //     console.log("%c🚨 Cảnh báo: Không được phép kiểm tra mã nguồn! 🚨", "color: red; font-size: 20px;");
  //   }, 1000);

  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Layout Component={HomePage} />} />
          <Route path="/register-seller" element={<Layout Component={RegisterSeller} />} />
          <Route path="/settings" element={<ProtectedRoute><LayoutUser Component={SettingPage} /></ProtectedRoute>} />
          <Route path="/settings/address" element={<ProtectedRoute><LayoutUser Component={AddressPage} /></ProtectedRoute>} />
          <Route path="/settings/changepass" element={<ProtectedRoute><LayoutUser Component={ChangePass} /></ProtectedRoute>} />
          <Route path="/detail" element={<Layout Component={DetailPage} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<IntroPage />} />
          <Route path="/1" element={<LoginPageTest />} />
          <Route path="/2" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
