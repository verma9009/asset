import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
//import Content_dashboard from "../component/Content_dashboard";
import { Outlet } from "react-router-dom";
import Content_dashboard from "./Components/ContentDashboard";
export default function Dashboard() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        {/* <Navbar/> */}

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>
            <Content_dashboard/>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
