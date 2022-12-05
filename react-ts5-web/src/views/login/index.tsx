import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { LoginWrapper } from "./style";
import { options } from "./config-particles";
import { Button, Form, Input, message, Tooltip } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { LoginParams } from "@/utils/types";
const Login = memo(() => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const onFinish = (form: LoginParams) => {
    console.log("onFinish");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("onFinishFailed");
  };

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: any) => {
    console.log("particlesLoaded");
  }, []);
  const handelStar = () => {
    window.open("https://gitee.com/kang0916/react18-v6-cms", "_blank");
  };
  return (
    <LoginWrapper>
      <Particles
        height={document.documentElement.clientHeight + ""}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      ></Particles>
      <div className="login-window">
        <div className="logintitle">全球新闻发布管理系统</div>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入您的用户名!" }]}>
            <Input placeholder="请输入用户名" prefix={<div>123</div>} />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入你的密码!" }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: "40px" }}>
              登录
            </Button>
            <Tooltip title="点个star吧">
              <Button shape="circle" onClick={handelStar} icon={<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: "18px" }} />} />
            </Tooltip>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  );
});

export default Login;
