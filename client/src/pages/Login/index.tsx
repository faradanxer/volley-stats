import React from "react";
import{Card,Row,Form, Space, Typography} from 'antd';
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input";
import { CustomButton } from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
  return (
    <Layout>
      <Row align='middle'justify='center'>
        <Card title='Войдите' style={{width:'30rem'}}>
        <Form onFinish={() =>null}>
          <CustomInput type="email" name="email" placeholder="Email"/>
          <PasswordInput name="password" placeholder="Password"/>
          <CustomButton
          type="primary"
          htmlType="submit"> Войти</CustomButton>
        </Form>
        <Space direction="vertical" size='large'>
          <Typography.Text>
            Нет аккаунта? <Link to={Paths.register}> Зарегистрироваться</Link>
          </Typography.Text>
        </Space>
        </Card>
      </Row>
      
    </Layout>
  );
};
