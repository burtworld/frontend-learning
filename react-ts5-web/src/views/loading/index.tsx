import React from "react";
import { LoadWrapper } from "./style";
import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <LoadWrapper>
      <Spin size="large"></Spin>
    </LoadWrapper>
  );
};
export default React.memo(Loading);





