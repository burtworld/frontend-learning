import { Layout } from "antd";
import { MenuList } from "@/interface/layout/menu";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import Sider from "antd/lib/layout/Sider";

const LayoutPage: React.FC = () => {
  const location = useLocation();

  console.log(location);
  const [openKey, setOpenKey] = useState<String>();
  const [selectKey, setSelectKey] = useState<string>(location.pathname);
  const [menuList, setMenuList] = useState<MenuList>([]);
  const dispatch = useDispatch();

  const toggle = () => {
    console.log("toggle action");
  };

  return (
    <Layout>
      <LayoutHeader collasped={true} toggle={toggle} />
      <Layout>
        <Sider className="layout-page-side" trigger={null} collapsible collapsedWidth={80} collapsed={false} breakpoint="md">
          
        </Sider>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
