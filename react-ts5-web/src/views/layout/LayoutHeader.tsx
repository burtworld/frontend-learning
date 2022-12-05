import { Header } from "antd/lib/layout/layout";
import React, { createElement } from "react";
import ReactSVG from "@/asserts/images/logo/react.svg";
import AntdSvg from "@/asserts/images/logo/antd.svg";
import SunSvg from "@/asserts/images/header/sun.svg";
import MoonSvg from "@/asserts/images/header/moon.svg";

import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { appConfig } from "@/env";
import { Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalState } from "@/store/reducers/globalReduce";
import { RootState } from "@/store";

// import {appConfig} from "src/"

interface HeaderProps {
  collasped: boolean;
  toggle: () => void;
}

const LayoutHeader: React.FC<HeaderProps> = ({ collasped, toggle }) => {
  const { theme } = useSelector((state: RootState) => state.global);
  const onChangeTheme = () => {

  }
  const appHeader = <div>app的头部</div>;
  const webHeader = (
    <Header>
      <div className="header-logo" style={{ width: collasped ? 80 : 200 }}>
        <img src={ReactSVG} alt="" style={{ marginRight: collasped ? "2px" : "20px" }} />
        <img src={AntdSvg} alt="" />
      </div>
      <div className="header-main">
        <div>
          <span>{collasped ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}</span>
        </div>
        <div className="header-actions">
          <Tooltip title="切换风格">
            <span>{createElement(theme === 'dark' ? SunSvg : MoonSvg,{
              onClick:onChangeTheme
            })}</span>
          </Tooltip>
          
        </div>
      </div>
    </Header>
  );

  return appConfig.isMobile ? appHeader : webHeader;
};
export default LayoutHeader;
