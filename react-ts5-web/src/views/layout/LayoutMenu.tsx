import { MenuList } from "@/interface/layout/menu";
import { Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SubMenu from "antd/lib/menu/SubMenu";
import Item from "antd/lib/list/Item";

import AccountSvg from "@/asserts/images/menu/account.svg";
import DashboardSvg from "@/asserts/images/menu/dashboard.svg";
import DocumentationSvg from "@/asserts/images/menu/documentation.svg";
import GuideSvg from "@/asserts/images/menu/guide.svg";
import PermissionSvg from "@/asserts/images/menu/guide.svg";

interface MenuProps {
  menuList: MenuList;
  openKeys?: string[];
  onChangeOpenKey: (key: string) => void;
  selectedKeys: string[];
  onChangeSelectedKey: (key: string) => void;
}

const MenuIcon: React.FC<{ type: string }> = ({ type }) => {
  let com = <GuideSvg />;

  if (type === "guide") {
    com = <GuideSvg />;
  } else if (type === "permission") {
    com = <PermissionSvg />;
  } else if (type === "dashboard") {
    com = <DashboardSvg />;
  } else if (type === "account") {
    com = <AccountSvg />;
  } else if (type === "documentation") {
    com = <DocumentationSvg />;
  } else {
    com = <GuideSvg />;
  }

  return <span className="anticon">{com}</span>;
};

const LayoutMenu: React.FC<MenuProps> = ({ menuList, openKeys, onChangeOpenKey, selectedKeys, onChangeSelectedKey }) => {
  const { theme, locale } = useSelector((state: RootState) => state.global);

  const onOpenChange = (key: string[]) => {
    console.log("onOpenChange", key);
    onChangeOpenKey(key.join(','));
  };

  const onMenuClick = (key: string) => {
    console.log("onMenuClick", key);
    onChangeSelectedKey(key);
  };

  const getTitle = (menu: MenuList[0]) => {
    return (
      <span style={{ display: "flex", alignItems: "center" }}>
        <MenuIcon type={menu.icon!} />
        <span>{menu.label[locale]}</span>
      </span>
    );
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
          <SubMenu key={menu.code} title={getTitle(menu)}>
            {menu.children.map((child) => (
              <Item key={child.path}>{child.label[locale]}</Item>
            ))}
          </SubMenu>
        ) : (
          <Item key={menu.path}>{getTitle(menu)}</Item>
        )
      )}
    </Menu>
  );
  
  
};
export default LayoutMenu;
