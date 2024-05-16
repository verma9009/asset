import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Content_dashboard from "../component/Content_dashboard";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
