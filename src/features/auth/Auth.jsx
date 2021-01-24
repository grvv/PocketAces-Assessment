import React from "react";
import { login } from "./authSlice";
import { useDispatch } from "react-redux";
import loginIcon from "../../images/login-image.svg";
import { generateToken } from "../../shared/helpers";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Card, Row, Col } from "antd";

export default function Auth() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const token = generateToken();
    dispatch(login(token));
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#e8e8e8" }}
    >
      <Col span={8}>
        <Card hoverable>
          <img
            alt="Login"
            width="100%"
            src={loginIcon}
            style={{ marginBottom: "20px" }}
          />
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Username"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
