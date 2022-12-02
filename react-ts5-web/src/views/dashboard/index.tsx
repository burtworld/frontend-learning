import React, { memo, useEffect, useState } from "react";
import "./index.scss";
import Overview from "./overview";

const DashBoard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("组件卸载时调用");

      clearTimeout(timer);
    };
  });
  return (
    <div>
      <Overview loading={false} />
    </div>
  );
};
export default memo(DashBoard);
