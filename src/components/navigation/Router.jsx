import React from "react";
import HomePage from "../pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacilitiesView from "../pages/FacilitiesView";
import NotFoundPage from "../pages/404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="facilities" element={<FacilitiesView />} />
        {/* <Route path="facilities">
          <Route
            path="view"
            element={
              <Container>
                <FacilitiesView />
              </Container>
            }
          />
          <Route path="create" element={<FacilitiesCreate />} />
          <Route path="details/:id" element={<FacilitiesDetails />} />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
