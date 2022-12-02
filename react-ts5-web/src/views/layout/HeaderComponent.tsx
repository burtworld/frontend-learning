import React from "react";

interface HeaderProps {
  collasped: boolean;
  toggle: () => void;
}

type HeaderProps2 = {
  collasped: boolean;
  toggle: () => void;
};

const HeaderComponent: React.FC<HeaderProps2> = ({collasped,toggle}) => {
  
  return <></>;
};
export default HeaderComponent;
