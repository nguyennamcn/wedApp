import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddAddressModal.css"; // Import file CSS
import { FaTimes } from "react-icons/fa";
import { appService } from "../../service/appService";
import { notification } from "antd";

export default function AddAddressModal({ isOpen, onClose, onSaveAddress }) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [addressType, setAddressType] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const handleSelectAddressType = (type) => {
    setAddressType(type);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    cityCode: "",
    district: "",
    districtCode: "",
    ward: "",
    wardCode: "",
    detailAddress: "",
  });


  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/?depth=1")
      .then((response) => setProvinces(response.data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  useEffect(() => {
    if (formData.cityCode) {
      axios
        .get(`https://provinces.open-api.vn/api/p/${formData.cityCode}?depth=2`)
        .then((response) => {
          setDistricts(response.data.districts);
          setWards([]);
          setFormData((prev) => ({
            ...prev,
            district: "",
            districtCode: "",
            ward: "",
            wardCode: "",
          }));
        })
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [formData.cityCode]);

  useEffect(() => {
    if (formData.districtCode) {
      axios
        .get(
          `https://provinces.open-api.vn/api/d/${formData.districtCode}?depth=2`
        )
        .then((response) => {
          setWards(response.data.wards);
          setFormData((prev) => ({ ...prev, ward: "", wardCode: "" }));
        })
        .catch((error) => console.error("Error fetching wards:", error));
    }
  }, [formData.districtCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeC = (e) => {
    const { name, value } = e.target;
    const selectedName =
      e.target.options[e.target.selectedIndex]?.getAttribute("data-name");

    if (name === "cityCode") {
      setFormData((prev) => ({
        ...prev,
        cityCode: value,
        city: selectedName || "",
      }));
    }
  };

  const handleChangeD = (e) => {
    const { value } = e.target;
    const selectedName =
      e.target.options[e.target.selectedIndex]?.getAttribute("data-name");

    setFormData((prev) => ({
      ...prev,
      districtCode: value,
      district: selectedName || "",
    }));
  };

  const handleOnclose = () => {
    onClose(); // Gọi hàm đóng modal từ props
    setAddressType("");
    setFormData({
      name: "",
      phone: "",
      city: "",
      cityCode: "",
      district: "",
      districtCode: "",
      ward: "",
      wardCode: "",
      detailAddress: "",
    });
  };

  const handleChangeW = (e) => {
    const { value } = e.target;
    const selectedName =
      e.target.options[e.target.selectedIndex]?.getAttribute("data-name");

    setFormData((prev) => ({
      ...prev,
      wardCode: value,
      ward: selectedName || "",
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.city ||
      !formData.district ||
      !formData.ward ||
      !formData.detailAddress
    ) {
      return;
    }

    const addressUser = {
      name: formData.name,
      phone: formData.phone,
      province: formData.city || "",
      district: formData.district || "",
      ward: formData.ward || "",
      detail: formData.detailAddress || "",
      addressType: addressType || "HOME", // Mặc định là "Nhà riêng"
    };

    console.log("Saving Address:", addressUser); // Debugging
    try {
        appService.postAddress(addressUser)
            .then((res) => {
                console.log(res)
                onSaveAddress(addressUser);
                setTimeout(() => {
                  openNotification(
                    "success",
                    "Thành công",
                    "Thêm đia chỉ mới thành công!"
                  );
                }, 300);
                setTimeout(() => {
                  window.location.reload();
                  handleOnclose();
                }, 600);
            }).catch((err) => {
                console.log(err)
            });
    } catch (error) {
        console.log(error)
    }
    
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {contextHolder}
      <div className="modal-content">
        <h2 style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}>
          Địa chỉ giao hàng
        </h2>
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
        <form onSubmit={handleSave}>
          <input
            name="name"
            type="text"
            placeholder="Tên người nhận"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Só điện thoại"
            value={formData.phone}
            onChange={handleChange}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <select
              style={{
                width: "30%",
              }}
              name="cityCode"
              value={formData.cityCode}
              onChange={handleChangeC}
            >
              <option value="">Chọn Tỉnh/Thành phố</option>
              {provinces.map((province) => (
                <option
                  key={province.code}
                  value={province.code}
                  data-name={province.name}
                >
                  {province.name}
                </option>
              ))}
            </select>

            <select
              style={{
                width: "30%",
              }}
              name="districtCode"
              value={formData.districtCode}
              onChange={handleChangeD}
              disabled={!formData.cityCode}
            >
              <option value="">Chọn Quận/Huyện</option>
              {districts.map((district) => (
                <option
                  key={district.code}
                  value={district.code}
                  data-name={district.name}
                >
                  {district.name}
                </option>
              ))}
            </select>

            <select
              style={{
                width: "30%",
              }}
              name="wardCode"
              value={formData.wardCode}
              onChange={handleChangeW}
              disabled={!formData.districtCode}
            >
              <option value="">Chọn Phường/Xã</option>
              {wards.map((ward) => (
                <option key={ward.code} value={ward.code} data-name={ward.name}>
                  {ward.name}
                </option>
              ))}
            </select>
          </div>

          <input
            name="detailAddress"
            type="text"
            placeholder="Địa chỉ chi tiết"
            value={formData.detailAddress}
            onChange={handleChange}
          />

          {/* day ne */}
          <span>Loại địa chỉ:</span>
          <div className="address-type">
            <button
              type="button"
              className={addressType === "HOME" ? "selected" : ""}
              onClick={() => handleSelectAddressType("HOME")}
            >
              Nhà riêng
            </button>
            <button
              type="button"
              className={addressType === "OFFICE" ? "selected" : ""}
              onClick={() => handleSelectAddressType("OFFICE")}
            >
              Văn phòng
            </button>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="save-btn">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
