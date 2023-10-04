// import { Route, Router, Routes } from "react-router-dom";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ route, component }, key) => {
        return (
          <React.Fragment key={key}>
            <Route path={route} element={component} />
          </React.Fragment>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
