import { MenuList } from "@/interface/layout/menu";
import { Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SubMenu from "antd/lib/menu/SubMenu";
import Item from "antd/lib/list/Item";

interface MenuProps {
  menuList: MenuList;
  openKeys?: string[];
  onChangeOpenKey: (key: string) => void;
  selectedKeys: string[];
  onChangeSelectedKey: (key: string) => void;
}

const MenuIcon: React.FC<{ type: string }> = ({ type }) => {
  return <></>;
};

const LayoutMenu: React.FC<MenuProps> = ({ menuList, openKeys, onChangeOpenKey, selectedKeys, onChangeSelectedKey }) => {
  const { theme } = useSelector((state: RootState) => state.global);
  const onOpenChange = (key: string[]) => {
    console.log("onOpenChange", key);
  };

  const onMenuClick = (key: string) => {
    console.log("onMenuClick", key);
  };

  const getTitie = (menu: MenuList[0]) => {
    return <span style={{ display: "flex", alignItems: "center" }}></span>;
  };

  return (
    <Menu
      mode="inline"
      theme={theme}
      selectedKeys={selectedKeys}
      openKeys={openKeys ? openKeys : []}
      onOpenChange={onOpenChange}
      onSelect={(key) => onMenuClick(key.key)}
      className="layout-menu"
    >
      {menuList.map((menu) =>
        menu.children ? (
          <SubMenu>
            {menu.children.map((child) => (
              <Item></Item>
            ))}
          </SubMenu>
        ) : (
          <Item></Item>
        )
      )}
    </Menu>
  );
};
export default LayoutMenu;
