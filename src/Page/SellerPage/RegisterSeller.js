import React, { useState } from "react";
import "./RegisterSeller.css";
import { Checkbox, Form, Input, Button } from "antd";

export default function RegisterSeller() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");

  const onChange = (e) => {
    setBusinessType(e.target.value); // Chỉ chọn một loại hình kinh doanh
  };
  console.log(businessType);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
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
          <span style={{ fontSize: "11px" }}>
            Loại hình kinh doanh sẽ ảnh hưởng đến thông tin bạn cần điền
          </span>
          <div
            style={{
              padding: "3% 30%",
            }}
          >
            <span style={{ fontSize: "14px" }}>
              Tên cửa hàng không được có từ “Flagship’’ hoặc ‘’Official’’, không
              được chỉ là các chữ số, không được chứa ký tự đặc hay ký tự lạ nào
              ngoại trừ ký tự tiếng Anh.
            </span>
            {/* from 1 */}
            {businessType === "canhan" && (
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
                  <Input style={{ 
                    
                  }} />
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
            {businessType === "hdk" && <h1>2</h1>}
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
