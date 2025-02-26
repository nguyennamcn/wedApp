import React, { useEffect, useRef, useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTimes,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./ModalUser.css";
import ZaloModal from "./ZaloModal";
import { validatePhone } from "../../Validation/CheckPhone/CheckPhone";
import { userService } from "../../service/userService";
import { message } from "antd";
import { localUserService } from "../../service/localService";
import { useDispatch } from "react-redux";
import { setLoginAction, setSignUpAction } from "../../redux/action/userAction";
import ModalRP from "./ModalRP";
import { validateEmail } from "../../Validation/CheckEmail/CheckMail";
import { appService } from "../../service/appService";
import { Button, notification, Space } from "antd";
import { validatePass } from "../../Validation/checkPass/CheckPass";

export default function ModalUser({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [isSms, setIsSms] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [countDown, setCountDown] = useState(12);
  const [canResend, setCanResend] = useState(false);
  const otpLength = 6;
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const inputRefs = useRef([]);
  const [zaloModal, setZaloModal] = useState(false);
  const [repass, setRepass] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [isRP, setIsRP] = useState(false);
  const [isDK, setIsDK] = useState(false);
  const dispatch = useDispatch();
  const [isNewPass, setIsNewPass] = useState(false);
  const [isXT, setIsXT] = useState(false);



  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^[0-9]$/.test(value) && value !== "") return; // Chỉ nhận số

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus vào ô tiếp theo nếu có nhập giá trị
    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  // Xử lý phím Backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const saveOtp = otp.join("");

  const handleResendCode = async () => {
    const data = {
      email: email,
      otpType: "REGISTER",
    };
    try {
      await appService.resendOtp(data);
      openNotification(
        "success",
        "Thành công",
        "Yêu cầu đã được gửi!"
      );
    } catch (err) {
      console.error("Lỗi khi gửi yêu cầu:", err);
      openNotification(
        "error",
        "Lỗi",
        err.response.data.metadata.message || "Gửi yêu cầu thất bại"
      );
    }
    setCanResend(false);
    setCountDown(12);
  };
  
  const handleOnclose = () => {
    setShowPassword(false);
    setIsSms(false);
    setIsOtp(false);
    setCountDown(12);
    setCanResend(false);
    setIsRP(false);
    setIsDK(false);
    setIsXT(false);
    setOtp(Array(otpLength).fill("")); // Reset OTP input
    onClose(); // Gọi hàm đóng modal từ props
    setPhoneNumber("");
  };

  const handleOtp = () => {
    const phoneValidation = validatePhone(phoneNumber);
    if (!phoneValidation.isValid) {
      setErrMessage(phoneValidation.message);
      setErrorModal(true); // Hiển thị modal lỗi
      setTimeout(() => setErrorModal(false), 3000); // Tự động đóng sau 3 giây
    } else {
      setErrMessage("");
      setZaloModal(true);
    }
  };

  const handleRePass = () => {
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      setErrMessage(emailValidation.message);
      setErrorModal(true); // Hiển thị modal lỗi
      setTimeout(() => setErrorModal(false), 3000); // Tự động đóng sau 3 giây
    } else {
      setErrMessage("");
      setRepass(true);
    }
  };

  useEffect(() => {
    if (isOtp && countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countDown === 0) {
      setCanResend(true);
    }
  }, [isOtp, countDown]);
  

  const handleLogin = async () => {
    
    const emailValidation = validateEmail(email);
    const passValidation = validatePass(pass);
    if (!email || !pass) {
      openNotification(
        "error",
        "Lỗi",
        "vui lòng nhập đầy đủ thông tin"
      );
      return;
    }
    if(!emailValidation.isValid){
      openNotification(
        "error",
        "Lỗi",
        "email không đúng định dạng"
      );
    } else if(!passValidation.isValid){
      openNotification(
        "error",
        "Lỗi",
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái, số và ký tự đặc biệt"
      );
    }
    else{
      try {
        const loginData = {
          email: email,
          password: pass,
        };
        const res = await userService.postLogin(loginData);
        console.log("API response:", res.data);
        
        
        if (res.data.status ===  true && res.data.metadata) {
          localUserService.set(res.data);
          dispatch(setLoginAction(res.data));
          console.log(res.data.status)
          handleOnclose();
          openNotification(
            "success",
            "Thành công",
            "Đăng nhập thành công!"
          );
        }
        else {
          console.log('e')
          setIsXT(true)
          handleRePass();
          openNotification(
            "warning",
            "Tài khoản chưa hoạt động",
            "Cần xác thực tài khoản để đăng nhập thành công!"
          );
        }
      } catch (err) {
        console.error("Lỗi đăng nhập:", err);
        openNotification(
          "error",
          "Lỗi",
          err.response.data.metadata.message
        );
      }
    }
    
  };

  const handleSignUp = async () => {
    if (!email || !pass || !pass2 ||!phoneNumber) {
      openNotification(
        "error",
        "Lỗi",
        "Không để trống tài khoản hoặc mật khẩu"
      );
      return;
    }
    if(pass !== pass2){
      openNotification(
        "error",
        "Lỗi",
        "Mật khẩu và nhập lại mật khẩu không giống nhau !"
      );
    }
    try {
      const signupForm = {
        email: email,
        phone: phoneNumber,
        password: pass,
        confirmPassword: pass2
      };
      console.log(signupForm)
      const res = await userService.postSignUp(signupForm);
      console.log("API response:", res.data);
      openNotification(
        "success",
        "Thành công",
        "Đăng ký thành công!"
      );
      handleOnclose();
    } catch (err) {
      console.error("Lỗi đăng Ký:", err);
      openNotification(
        "error",
        "Lỗi",
        err.response?.data?.message || "Đăng ký thất bại!"
      );
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      message.error("Vui lòng nhập email!");
      return;
    }

    try {
      const res = await appService.resetPassword(email);
      openNotification(
        "success",
        "Thành công",
        "Yêu cầu đặt lại mật khẩu đã được gửi!"
      );
      console.log(res);
      handleRePass();
    } catch (err) {
      console.error(
        "Lỗi khi gửi yêu cầu đặt lại mật khẩu:",
        err.response.data.metadata.message
      );
      openNotification(
        "error",
        "Lỗi",
        err.response.data.metadata.message || "Gửi yêu cầu thất bại"
      );
    }
  };

  const handleCfOtp = async () => {
    const formData = {
      email: email,
      otp: saveOtp,
      type: "FORGOT_PASSWORD",
    };
    console.log(formData);
    try {
      await appService.conformOtp(formData);
      openNotification(
        "success",
        "Thành công",
        "Yêu cầu đặt lại mật khẩu đã được gửi!"
      );
    } catch (err) {
      console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", err);
      openNotification(
        "error",
        "Lỗi",
        err.response.data.metadata.message || "Gửi yêu cầu thất bại"
      );
    }
  };
  const handleXTOtp = async () => {
    const formData = {
      email: email,
      otp: saveOtp,
      type: "REGISTER",
    };
    console.log(formData);
    try {
      await appService.conformOtp(formData);
      openNotification(
        "success",
        "Thành công",
        "Tài khoản xác thực thành công!"
      );
      handleOnclose()
    } catch (err) {
      console.error("Lỗi khi gửi yêu cầu xác thực:", err);
      openNotification(
        "error",
        "Lỗi",
        err.response.data.metadata.message || "Gửi yêu cầu thất bại"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {contextHolder}
      {/* login */}
      {!isRP && !isSms && !isOtp && !isDK && !isXT &&(
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">ĐĂNG NHẬP</h2>

          {/* Form nhập thông tin */}
          <div className="modal-body">
            <label>Tên đăng nhập</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email người dùng"
            />

            <label>Mật khẩu</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <a
              onClick={() => setIsRP(true)}
              style={{ cursor: "pointer" }}
              className="forgot-password"
            >
              Quên mật khẩu?
            </a>

            <button onClick={handleLogin} className="login-button">
              ĐĂNG NHẬP
            </button>
            <a
              onClick={() => setIsSms(true)}
              style={{ cursor: "pointer" }}
              className="sms-login"
            >
              Đăng nhập bằng SMS
            </a>

            <div className="divider">Hoặc</div>

            {/* Nút đăng nhập với Google và Facebook */}
            <button className="social-login google">
              <FaGoogle style={{ marginRight: "2%" }} /> Google
            </button>
            <button className="social-login facebook">
              <FaFacebook style={{ marginRight: "2%" }} /> Facebook
            </button>
            <p style={{ textAlign: "left", marginTop: "5%", fontSize: "16px" }}>
              Bạn mới biết đến GreenShop lần đầu?{" "}
              <span
                onClick={() => setIsDK(true)}
                style={{
                  color: "#1A81FF",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Đăng ký
              </span>
            </p>
          </div>
        </div>
      )}

      {/* dang ky */}
      {!isRP && !isSms && !isOtp && isDK && (
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">ĐĂNG KÝ</h2>
          {/* Form nhập thông tin */}
          <div className="modal-body">
            <label>Tên đăng nhập</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email người dùng"
            />

            <label>Số điện thoại</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              placeholder="Số điện thoại"
            />

            <label>Mật khẩu</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <label>Nhập lại mật khẩu</label>
            <div className="password-container">
              <input
                type={showRePassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={pass2}
                onChange={(e) => setPass2(e.target.value)}
              />
              <button
                onClick={() => setShowRePassword(!showRePassword)}
                className="toggle-password"
              >
                {showRePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button onClick={handleSignUp} className="login-button">
              ĐĂNG Ký
            </button>
            <a
              onClick={() => setIsSms(true)}
              style={{ cursor: "pointer" }}
              className="sms-login"
            >
              Đăng nhập bằng SMS
            </a>

            <div className="divider">Hoặc</div>

            {/* Nút đăng nhập với Google và Facebook */}
            <button className="social-login google">
              <FaGoogle style={{ marginRight: "2%" }} /> Google
            </button>
            <button className="social-login facebook">
              <FaFacebook style={{ marginRight: "2%" }} /> Facebook
            </button>
          </div>
        </div>
      )}

      {/* quen mk */}
      {isRP && !isOtp && !isSms && (
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">QUÊN MẬT KHẨU</h2>

          {/* Form nhập thông tin */}
          <div className="modal-body">
            <label>Tài khoản / email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Nhập tài khoản / email"
            />
            <button
              className="login-button"
              onClick={() => {
                handleResetPassword();
              }}
            >
              TIẾP TỤC
            </button>

            {errorModal && (
              <div className="error-modal">
                <p>{errMessage}</p>
              </div>
            )}
            <ModalRP
              isOpen={repass}
              onClose={() => setRepass(false)}
              email={email}
              onSendOtp={() => {
                setIsOtp(true); // Chuyển sang màn OTP
                setCanResend(false);
                setCountDown(12); // Reset thời gian OTP
              }}
            />
            <a
              onClick={() => setIsRP(false)}
              style={{ cursor: "pointer" }}
              className="forgot-password"
            >
              Đăng nhập mật khẩu?
            </a>

            <div className="divider">Hoặc</div>

            {/* Nút đăng nhập với Google và Facebook */}
            <button className="social-login google">
              <FaGoogle style={{ marginRight: "2%" }} /> Google
            </button>
            <button className="social-login facebook">
              <FaFacebook style={{ marginRight: "2%" }} /> Facebook
            </button>
          </div>
        </div>
      )}

      {/* Màn hình nhập số điện thoại (SMS) */}
      {isSms && !isOtp && (
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">ĐĂNG NHẬP/ĐĂNG KÝ</h2>

          {/* Form nhập thông tin */}
          <div className="modal-body">
            <label>Số điện thoại</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Nhập số điện thoại"
            />
            <button className="login-button" onClick={handleOtp}>
              TIẾP TỤC
            </button>

            {errorModal && (
              <div className="error-modal">
                <p>{errMessage}</p>
              </div>
            )}
            <ZaloModal
              isOpen={zaloModal}
              onClose={() => setZaloModal(false)}
              phoneNumber={phoneNumber}
              onSendOtp={() => {
                setIsOtp(true); // Chuyển sang màn OTP
                setCanResend(false);
                setCountDown(12); // Reset thời gian OTP
              }}
            />
            <a
              onClick={() => setIsSms(false)}
              style={{ cursor: "pointer" }}
              className="forgot-password"
            >
              Đăng nhập mật khẩu?
            </a>

            <div className="divider">Hoặc</div>

            {/* Nút đăng nhập với Google và Facebook */}
            <button className="social-login google">
              <FaGoogle style={{ marginRight: "2%" }} /> Google
            </button>
            <button className="social-login facebook">
              <FaFacebook style={{ marginRight: "2%" }} /> Facebook
            </button>
          </div>
        </div>
      )}

      {/* Màn hình nhập OTP */}
      {isOtp && (
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">Mã OTP</h2>
          <p className="otp-message">
            Mã xác thực đã được gửi đến tài khoản <br />
            <span>email: {email}</span>
          </p>

          {/* Ô nhập mã OTP */}
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-input"
              />
            ))}
          </div>

          <button onClick={handleCfOtp} className="login-button">
            TIẾP TỤC
          </button>

          {canResend ? (
            <button
              style={{
                border: "none",
                marginTop: "2%",
                background: "none",
              }}
              onClick={handleResendCode}
            >
              Gửi lại mã
            </button>
          ) : (
            <p
              style={{
                marginTop: "1%",
              }}
            >
              Vui lòng đợi {countDown} giây để gửi lại
            </p>
          )}
        </div>
      )}


      {/* Xác thực tài khoản*/}
      {isXT && (
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">Mã OTP</h2>
          <p className="otp-message">
            Mã xác thực đã được gửi đến tài khoản <br />
            <span>email: {email}</span>
          </p>

          {/* Ô nhập mã OTP */}
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-input"
              />
            ))}
          </div>

          <button onClick={handleXTOtp} className="login-button">
            TIẾP TỤC
          </button>

          
            <button
              style={{
                border: "none",
                marginTop: "2%",
                background: "none",
              }}
              onClick={handleResendCode}
            >
              Gửi lại mã
            </button>
          
        </div>
      )}

      {/* mật khẩu mới */}
      {isNewPass && (
        <div className="modal-container">
          {/* Nút đóng */}
          <button
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
              border: "none",
              background: "none",
              fontSize: "25px",
            }}
            onClick={handleOnclose}
          >
            <FaTimes />
          </button>

          {/* Tiêu đề */}
          <h2 className="modal-title">ĐĂNG NHẬP/ĐĂNG KÝ</h2>

          {/* Form nhập thông tin */}
          <div className="modal-body">
            <label>Tên đăng nhập</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              placeholder="Email/Số điện thoại"
            />

            <label>Mật khẩu</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <a
              onClick={() => setIsRP(true)}
              style={{ cursor: "pointer" }}
              className="forgot-password"
            >
              Quên mật khẩu?
            </a>

            <button onClick={handleLogin} className="login-button">
              ĐĂNG NHẬP
            </button>
            <a
              onClick={() => setIsSms(true)}
              style={{ cursor: "pointer" }}
              className="sms-login"
            >
              Đăng nhập bằng SMS
            </a>

            <div className="divider">Hoặc</div>

            {/* Nút đăng nhập với Google và Facebook */}
            <button className="social-login google">
              <FaGoogle style={{ marginRight: "2%" }} /> Google
            </button>
            <button className="social-login facebook">
              <FaFacebook style={{ marginRight: "2%" }} /> Facebook
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
