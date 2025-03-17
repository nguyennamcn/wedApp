import React, { useState } from "react";
import "./RegisterSeller.css";
import { Checkbox, Form, Input, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import AddAddressRegister from "../../Components/AddAddrassModal/AddAddressRegister";
import { appService } from "../../service/appService";

export default function RegisterSeller() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");
  const [shopName, setShopName] = useState("");
  const [location, setLocation] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(null);
  const [isModalAdd2, setIsModalAdd2] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const onChange = (e) => {
    setBusinessType(e.target.value); // Chỉ chọn một loại hình kinh doanh
    setStep(1);
  };

  const handleStep1 = (values) => {
    setShopName(values.shopName);
    setDescription(values.description);
    if (step < 5) {
      setStep(2);
    }
  };
  const handleStep2 = (values) => {
    setEmail(values.email);
    setPhone(values.phone);
    if (step < 5) {
      setStep(3);
    }
  };

  const openAddressModal2 = () => {
    setIsModalAdd2(true);
  };
  const closeAddressModal2 = () => {
    setIsModalAdd2(false);
  };

  const handleStep3 = (values) => {
    const dataForm = [
      {
        shopName: shopName,
        location: selectedAddress,
        identityNumber: values.identityNumber,
        ownerName: values.ownerName,
        businessType: businessType,
        email: email,
        description: description,
        phone: phone,
        category: null,
      },
    ];
    try {
      const res = appService.postStore(dataForm)
    } catch (error) {
      console.log(error)
    }
    if (step < 5) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    if (step < 5) {
      setStep(step - 1);
    }
    setSelectedAddress(null);
    setIsModalAdd2(false);
  };

  const handleSaveAddress = (address) => {
    setSelectedAddress(address); // Lưu địa chỉ vào state
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div
      style={{
        padding: "1% 0",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          fontFamily: "inter",
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        Đăng ký bán hàng với Xmark
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 35%",
          position: "relative",
        }}
      >
        <span className={`progress-bar-item ${step >= 1 ? "active-bar" : ""} `}>
          1
        </span>
        <hr
          className={`hr-bar ${step >= 1 ? "active-hr" : ""} ${
            step >= 2 ? "actived-hr" : ""
          }`}
        />
        <span className={`progress-bar-item ${step >= 2 ? "active-bar" : ""}`}>
          2
        </span>
        <hr
          className={`hr-bar-2 ${step >= 2 ? "active-hr" : ""} ${
            step >= 3 ? "actived-hr" : ""
          }`}
        />
        <span className={`progress-bar-item ${step >= 3 ? "active-bar" : ""}`}>
          3
        </span>
        <hr
          className={`hr-bar-3 ${step >= 3 ? "active-hr" : ""} ${
            step >= 4 ? "actived-hr" : ""
          }`}
        />
        <span
          className={`progress-bar-item-last ${step >= 4 ? "active-bar" : ""}`}
        >
          4
        </span>
      </div>
      <div
        style={{
          marginTop: "4%",
        }}
      >
        {/* step 1 */}
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label style={{ fontSize: "20px", marginRight: "3%" }}>
              Loại hình kinh doanh
            </label>
            <div className="checkbox-group">
              {["canhan", "hdk", "cty"].map((type, index) => (
                <Checkbox
                  key={index}
                  value={type}
                  checked={businessType === type}
                  onChange={onChange}
                  style={{
                    fontSize: "20px",
                    marginRight: "30px",
                  }}
                >
                  {type === "canhan"
                    ? "Cá nhân"
                    : type === "hdk"
                    ? "Hộ kinh doanh"
                    : "Công ty"}
                </Checkbox>
              ))}
            </div>
          </div>
          {businessType === "hdk" && (
            <span style={{ fontSize: "11px" }}>
              Loại hình kinh doanh sẽ ảnh hưởng đến thông tin bạn cần điền
            </span>
          )}

          <div
            style={{
              padding: "3% 30%",
            }}
          >
            {businessType === "hdk" && step === 1 && (
              <span style={{ fontSize: "14px" }}>
                Tên cửa hàng không được có từ “Flagship’’ hoặc ‘’Official’’,
                không được chỉ là các chữ số, không được chứa ký tự đặc hay ký
                tự lạ nào ngoại trừ ký tự tiếng Anh.
              </span>
            )}

            {/* from 1 */}
            {businessType === "canhan" && step === 1 && (
              <Form
                name="wrap"
                labelCol={{
                  flex: "110px",
                }}
                labelAlign="left"
                onFinish={handleStep1}
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
                style={{
                  maxWidth: 600,
                  marginTop: "20px",
                  padding: "0 5%",
                }}
              >
                <Form.Item
                  label="Tên cửa hàng"
                  name="shopName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Mô tả"
                  name="description"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                  style={{
                    marginLeft: "65%",
                    marginTop: "10% ",
                  }}
                >
                  <Button>Hủy bỏ</Button>
                  <Button
                    style={{
                      marginLeft: "10%",
                      background: "#6EB566",
                      color: "white",
                      outline: "none",
                    }}
                    htmlType="submit"
                  >
                    Tiếp theo
                  </Button>
                </Form.Item>
              </Form>
            )}

            {/* canhan step-2 */}
            {businessType === "canhan" && step === 2 && (
              <Form
                name="wrap"
                labelCol={{
                  flex: "110px",
                }}
                labelAlign="left"
                onFinish={handleStep2}
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
                style={{
                  maxWidth: 600,
                  marginTop: "20px",
                  padding: "0 5%",
                }}
              >
                <Form.Item
                  label="Địa chỉ email"
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <div
                  style={{
                    textAlign: "left",
                  }}
                >
                  <span style={{ marginLeft: "10%", marginRight: "2%" }}>
                    Địa chỉ{" "}
                  </span>
                  <Button
                    onClick={openAddressModal2}
                    style={{
                      background: "none",
                      color: "black",
                      outline: "none",
                    }}
                  >
                    Thêm
                  </Button>
                  {selectedAddress !== null && (
                    <Button
                      style={{
                        background: "none",
                        color: "black",
                        outline: "none",
                        marginLeft: "3%",
                        opacity: "0.5",
                      }}
                    >
                      {selectedAddress.length > 20
                        ? selectedAddress.substring(0, 46) + "..."
                        : selectedAddress}
                    </Button>
                  )}
                </div>

                <Form.Item
                  style={{
                    marginTop: "10% ",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div style={{ width: "60%", textAlign: "left" }}>
                      <Button
                        onClick={handlePrev}
                        style={{
                          background: "none",
                          color: "black",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Quay lại
                      </Button>
                    </div>
                    <div style={{ width: "20%" }}>
                      <Button
                        style={{
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Hủy bỏ
                      </Button>
                    </div>
                    <div style={{ width: "20%", textAlign: "right" }}>
                      <Button
                        style={{
                          background: "#6EB566",
                          color: "white",
                          outline: "none",
                        }}
                        htmlType="submit"
                      >
                        Tiếp Theo
                      </Button>
                    </div>
                  </div>
                </Form.Item>
              </Form>
            )}

            <AddAddressRegister
              isOpen={isModalAdd2}
              onClose={closeAddressModal2}
              onSaveAddress={handleSaveAddress}
            />

            {/* canhanh step-3 */}
            {businessType === "canhan" && step === 3 && (
              <Form
                name="wrap"
                labelCol={{
                  flex: "110px",
                }}
                labelAlign="left"
                onFinish={handleStep3}
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
                style={{
                  maxWidth: 600,
                  marginTop: "20px",
                  padding: "0 5%",
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    marginBottom: "5%",
                  }}
                >
                  <span style={{ marginLeft: "0%", marginRight: "7%" }}>
                    Hình thức định danh{" "}
                  </span>
                  <span>CCCD</span>
                </div>
                <Form.Item
                  label="Số CCCD"
                  name="identityNumber"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Họ & Tên"
                  name="ownerName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  style={{
                    marginTop: "10% ",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div style={{ width: "60%", textAlign: "left" }}>
                      <Button
                        onClick={handlePrev}
                        style={{
                          background: "none",
                          color: "black",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Quay lại
                      </Button>
                    </div>
                    <div style={{ width: "20%" }}>
                      <Button
                        style={{
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Hủy bỏ
                      </Button>
                    </div>
                    <div style={{ width: "20%", textAlign: "right" }}>
                      <Button
                        style={{
                          background: "#6EB566",
                          color: "white",
                          outline: "none",
                        }}
                        htmlType="submit"
                      >
                        Tiếp Theo
                      </Button>
                    </div>
                  </div>
                </Form.Item>
              </Form>
            )}

            {/* HDK - step 1 */}
            {businessType === "hdk" && (
              <Form
                name="wrap"
                labelCol={{
                  flex: "110px",
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
                style={{
                  maxWidth: 600,
                  marginTop: "20px",
                  padding: "0 5%",
                }}
              >
                <Form.Item
                  label="Tên cửa hàng"
                  name="username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Mô tả"
                  name="detail"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <span style={{ fontSize: "14px" }}>
                  Chọn hạng mục sản phẩm bạn định bán. Thông tin hạng mục bạn
                  điền ở đây sẽ không ảnh hưởng đến việc tải lên sản phẩm.
                </span>
                <div
                  style={{
                    margin: "3% 0",
                  }}
                >
                  <span style={{ marginRight: "20px" }}>Hạng mục sản phẩm</span>
                  <Select
                    defaultValue="lucy"
                    style={{ width: "70%" }}
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </div>

                <Form.Item
                  style={{
                    marginLeft: "65%",
                    marginTop: "10% ",
                  }}
                >
                  <Button>Hủy bỏ</Button>
                  <Button
                    style={{
                      marginLeft: "10%",
                      background: "#6EB566",
                      color: "white",
                    }}
                    htmlType="submit"
                  >
                    Tiếp theo
                  </Button>
                </Form.Item>
              </Form>
            )}
            {businessType === "cty" && <h1>3</h1>}
            {businessType === "" && (
              <Form
                name="wrap"
                labelCol={{
                  flex: "110px",
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
                style={{
                  maxWidth: 600,
                  marginTop: "20px",
                  padding: "0 5%",
                }}
              >
                <Form.Item
                  label="Tên cửa hàng"
                  name="username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Địa chỉ email"
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  style={{
                    marginLeft: "65%",
                    marginTop: "10% ",
                  }}
                >
                  <Button>Hủy bỏ</Button>
                  <Button style={{ marginLeft: "10%" }} htmlType="submit">
                    Tiếp theo
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
