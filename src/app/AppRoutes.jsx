import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { navItems } from "../app/navitems";
import PrivateRoute from "../app/PrivateRouter";

export default function Router() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<PrivateRoute isAllowed={isAuthenticated} to="/login" />}
        >
          <Route path="/" element={<Layout />}>
            {navItems
              .filter((item) => item.isPrivate)
              .map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
          </Route>
        </Route>
        <Route element={<PrivateRoute isAllowed={!isAuthenticated} to="/" />}>
          {navItems
            .filter((item) => !item.isPrivate)
            .map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
