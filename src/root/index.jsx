import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";
import Context from "../context";
import Universal from "../components/Universal";

const Root = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route element={<Universal />}>
            {routes.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default Root;
