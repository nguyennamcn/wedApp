import React, { useState } from 'react';
import '../../css/UserPages/login.css';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginPage = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div style={{ display: 'flex' }}>
      <div
      className='img-login-bg'
        style={{
          backgroundColor: "#FF9513",
          width: '40%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '0',
          }}
          className={`ard ${isRegisterActive ? 'register-active' : ''}`}
        >
          <p
            className={`login-animate ${!isRegisterActive ? 'active' : ''}`}
            onClick={() => setIsRegisterActive(false)} // Đổi trạng thái về false
          >
            ĐĂNG NHẬP
          </p>
          <p
            className={`login-animate ${isRegisterActive ? 'active' : ''}`}
            onClick={() => setIsRegisterActive(true)} // Đổi trạng thái về true
          >
            ĐĂNG KÝ
          </p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div>
          <h1>BRAND</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '0',
          backgroundColor: '#9292924D',
          width: '60vw',
          fontSize: '24px',
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <p>ddds</p>
          <p>ddds</p>
          <p>ddds</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
