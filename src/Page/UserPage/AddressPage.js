import React, { useEffect, useState } from "react";
import { GrMapLocation } from "react-icons/gr";
import AddAddressModal from "../../Components/AddAddrassModal/AddAddressModal";
import { appService } from "../../service/appService";
import UpdateAddress from "../../Components/AddAddrassModal/UpdateAddress";
import LoadingPage from "../../Components/Spinner/LoadingPage";
import { Button, Popconfirm } from "antd";
import type { PopconfirmProps } from 'antd';

export default function AddressPage() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalUp, setIsModalUp] = useState(false);
  const [userData, setUserData] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);
  const [ld, setLd] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await appService.getProfile();
        setUserData(res.data.metadata);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };

    fetchProfile();
  }, []);

  console.log(ld);
  const allName = `${userData?.firstName} ${userData?.lastName}`;
  const phoneNumber = userData?.phone
    ?.replace(/^0/, "")
    .replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");

  const openAddressModal = () => {
    setIsModalAdd(true);
  };
  const closeAddressModal = () => {
    setIsModalAdd(false);
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setIsModalUp(true);
  };

  const closeUpModal = () => {
    setIsModalUp(false);
  };
  const handleDeleteAddress = (id) => {
    console.log("Xóa địa chỉ với ID:", id);
    try {
      appService
        .deleteAddress(id)
        .then((res) => {
          window.location.reload();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  if (!userData?.addresses || userData.addresses.length === 0) {
    console.log("Không có địa chỉ nào.");
  }

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
  };


  console.log(userData?.addresses);
  const handleSaveAddress = (address) => {
    setSelectedAddress(address); // Lưu địa chỉ vào state
    console.log(selectedAddress);
  };
  return (
    <div>
      {ld && <LoadingPage />}
      <div
        style={{
          background: "white",
          padding: "10px 2%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "18px" }}>Địa chỉ của tôi</span>
        <button
          onClick={openAddressModal}
          style={{
            background: "rgb(110, 181, 102)",
            border: "none",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          + Thêm địa chỉ mới
        </button>
        <AddAddressModal
          isOpen={isModalAdd}
          onClose={closeAddressModal}
          onSaveAddress={handleSaveAddress}
        />
      </div>
      <hr style={{ width: "95%", border: "1px solid black" }} />
      {/* chua co dia chi nao */}
      {userData?.addresses.length === 0 && (
        <div
          style={{
            background: "white",
            padding: "10px 2%",
            height: "65vh",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "10% 0",
            }}
          >
            <GrMapLocation
              style={{
                fontSize: "120px",
                opacity: "0.4",
              }}
            />
            <p
              style={{
                fontSize: "20px",
                cursor: "default",
              }}
            >
              Bạn chưa có địa chỉ
            </p>
          </div>
        </div>
      )}

      {/* co dia chi */}
      {userData?.addresses?.length !== 0 && (
        <div
          style={{
            background: "white",
            padding: "2% 2%",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold", marginRight: "1%" }}>
              {allName}
            </span>
            <span style={{ fontSize: "14px", opacity: "0.5" }}>
              (+84) {phoneNumber}
            </span>
            <p style={{ fontSize: "13px", lineHeight: "15px" }}>
              {userData?.addresses.map((item, index) => (
                <div style={{ position: "relative" }} key={index}>
                  <span>{item?.detail}</span>
                  <br />
                  <span>
                    {item?.ward}, {item?.district}, {item?.province}
                  </span>
                  <button
                    onClick={() => handleEditAddress(item)}
                    style={{
                      position: "absolute",
                      bottom: "60%",
                      right: "5%",
                      padding: "5px 1%",
                      borderRadius: "10px",
                      border: "2px solid #6EB566",
                      color: "#6EB566",
                      outline: "none",
                    }}
                  >
                    Sửa địa chỉ
                  </button>
                  <UpdateAddress
                    isOpen={isModalUp}
                    onClose={closeUpModal}
                    address={editingAddress}
                  />
                  <Popconfirm
                    
                    title="Xóa địa chỉ"
                    description="Bạn có chắc muốn xóa địa chỉ này không?"
                    onConfirm={() => handleDeleteAddress(item?.id)}
                    onCancel={cancel}
                    okText="Có"
                    cancelText="Không"
                  >
                    <Button
                    style={{
                        position: "absolute",
                        top: "60%",
                        right: "5%",
                        padding: "5px 1%",
                        borderRadius: "10px",
                        border: "2px solid red",
                        color: "red",
                        outline: "none",
                      }}
                    >Xóa địa chỉ</Button>
                  </Popconfirm>
                </div>
              ))}
            </p>
            <button
              style={{
                background: "none",
                padding: "5px 1%",
                borderRadius: "10px",
                border: "2px solid #6EB566",
                color: "#6EB566",
              }}
            >
              Địa chỉ mặc định
            </button>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
}
