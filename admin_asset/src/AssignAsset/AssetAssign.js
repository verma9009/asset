import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function AssetAssign() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        {/* <Navbar/> */}

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>

                   <div className="content-body">
         <div className="container-fluid row">
           <div className="col-md-12">
             <div className="container-fluid">
               <div className="row">
                 <div className="col-12">
                   <div className="card">
                     <div className="card-body">
                       <h4 className="card-title">asset assigned</h4>
                       <div className="table-responsive">
                         <table className="table table-striped table-bordered zero-configuration">
                           <thead>
                             <tr>
                               <th>assign_date</th>
                               <th>return_date</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td>12/01/2024</td>
                               <td>18/04/2024</td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>11/01/2024</td>
                               <td>19/04/2024</td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>07/01/2024</td>
                               <td>20/04/2024</td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>











            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
