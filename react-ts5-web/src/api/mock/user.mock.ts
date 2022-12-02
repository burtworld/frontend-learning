import { LoginResult, Role } from "interface/iUser";
import Mock from "mockjs";
import { PaResponse } from "utils/request";

Mock.mock("/user/login", "post", (config: any) => {
  const body: LoginResult = JSON.parse(config?.body);
  return {
    token: "123abcdefg",
    username: body?.username,
    role: body?.username as Role,
  };
});

Mock.mock("/user/logout", "post", (config: any) => {
  return {
    suc: true,
    msg: "退出成功",
  };
});
