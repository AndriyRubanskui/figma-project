import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DeminingSolutionsPage from "./components/DeminingSolutionsPageFixed";
import AboutUsPage from "./components/AboutUsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DeminingSolutionsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </>
  )
);

function Routes(): React.JSX.Element {
  return <RouterProvider router={router} />;
}

export default Routes;
