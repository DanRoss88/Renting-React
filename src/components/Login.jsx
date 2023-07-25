import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
 
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      position: "bottom-left",
    });
  };
    const handleSuccess = (message) => {
      toast.success(message, {
        position: "bottom-left",
      });
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = await axios.post(
            "/login",
            {
              ...inputValue,
            },
            { withCredentials: true }
          );
          console.log("Response data:", data);
          console.log(data);
          const { success, message } = data;
          if (success) {
            handleSuccess(message);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            console.log("Login Error:", message);
            handleError(message);
          }
        } catch (error) {
          console.log(error);
        }
        setInputValue({
          ...inputValue,
          username: "",
          password: "",
        });
      };








return (
<>
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
    
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <Form.Item
      label="Username"
      name="username"
      // htmlFor='username'
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input onChange={handleOnChange} value={username} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      // htmlFor="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password onChange={handleOnChange} value={password} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox >Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button  type="submit" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  <ToastContainer />
  </>
);

    }
