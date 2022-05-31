import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Header from "./Header";
import Sidebar from "./Sidebar";
const SidebarLayout = ({ print }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/dashboard" ||
      location.pathname === "/profile" ||
      location.pathname === "/schedule" ? (
        <>
          <Sidebar print={print} />
          <Header />
          <Outlet />
        </>
      ) : (
        <>
          <AdminSidebar />
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

export default SidebarLayout;
