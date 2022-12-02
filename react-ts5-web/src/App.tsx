import React, { memo, useState, useEffect, useCallback } from "react";
import routes from "router";
import { useRoutes, Route, Routes } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const App:React.FC = ()=> {
  const [rout, setRout] = useState(routes);
  const element = useRoutes(routes);
  // const { routs } = useSelector((state: any) => ({ routs: state.login.routes }), shallowEqual);

  // useEffect(() => {
  //   console.log("app useEffect");
  // }, [routs]);
  return element;
  // return (
  //   <Routes>
  //     <Route path="/" element={<div>123123</div>}>
  //       <Route index element={<div>456</div>} />
  //       <Route path=":teamId" element={<div>123123</div>} />
  //     </Route>
  //   </Routes>
  // );
}

export default App;
