import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import App from "../app";
import appRoutes from "./routes";
import Page404 from "../pages/Page404/page404";
import { authStore } from "../core/stores";

function RoutesHOC() {
  const isAuthenticated = authStore.isAuthenticated;

  // App
  const { publicRoutes: appRoutesPublic, authRoutes: appRoutesAuth } =
    appRoutes;

  const appRoutesToUse = isAuthenticated
    ? appRoutesPublic.concat(...appRoutesAuth)
    : appRoutesPublic;

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<App />}>
          {appRoutesToUse.map((el, i) => (
            <Route key={i} {...el} />
          ))}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default observer(RoutesHOC);
