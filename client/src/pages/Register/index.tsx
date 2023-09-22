import React from "react";
import{Card,Row,Form, Space, Typography} from 'antd';
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input";
import { CustomButton } from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Register = () => {
  return (
    <Layout>
      <Row align='middle'justify='center'>
        <Card title='Зарегистрируйтесь' style={{width:'30rem'}}>
        <Form onFinish={() =>null}>
          <CustomInput type="name" name="name" placeholder="Name"/>
          <CustomInput type="email" name="email" placeholder="Email"/>
          <PasswordInput name="password" placeholder="Password"/>
          <PasswordInput name="confirmPassword" placeholder="Confirm password"/>
          <CustomButton
          type="primary"
          htmlType="submit"> Зарегистрироваться</CustomButton>
        </Form>
        <Space direction="vertical" size='large'>
          <Typography.Text>
            Есть аккаунта? <Link to={Paths.login}> Войти</Link>
          </Typography.Text>
        </Space>
        </Card>
      </Row>
      
    </Layout>
  );
};
