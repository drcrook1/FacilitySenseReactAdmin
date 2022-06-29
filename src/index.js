import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SideNav from "./components/navigation/SideNav";
import HomePage from "./components/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacilitiesView from "./components/pages/facilities/FacilitiesView";
import FacilitiesCreate from "./components/pages/facilities/FacilitiesCreate";
import NotFoundPage from "./components/pages/404";
import FacilitiesDetails from "./components/pages/facilities/FacilitiesDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideNav />
    <br></br>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="facilities">
          <Route path="view" element={<FacilitiesView />} />
          <Route path="create" element={<FacilitiesCreate />} />
          <Route path="details/:id" element={<FacilitiesDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
