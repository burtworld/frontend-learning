import { Layout } from "antd";
import { MenuList } from "interface/layout/menu";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const LayoutPage: React.FC = () => {
  const location = useLocation();

  console.log(location);
  const [openKey, setOpenKey] = useState<String>();
  const [selectKey,setSelectKey] = useState<string>(location.pathname);
  const [menuList,setMenuList] = useState<MenuList>([]);
  const dispatch = useDispatch();

  return (
    <Layout>
      
    </Layout>
  );
};
export default LayoutPage;
