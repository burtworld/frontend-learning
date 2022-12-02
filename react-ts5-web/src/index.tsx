import "asserts/common.less";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
// import App from "./App-test";

import store from "store";
import { BrowserRouter as Router } from "react-router-dom";

import Loading from "views/loading";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>
);


