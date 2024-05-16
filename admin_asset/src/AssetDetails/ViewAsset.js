import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function ViewAsset() {
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
                       <h4 className="card-title">Data Table</h4>
                       <div className="table-responsive">
                         <table className="table table-striped table-bordered zero-configuration">
                           <thead>
                             <tr>
                               <th>asset_Name</th>
                               <th>asset_type</th>
                               <th>Manufacturer</th>
                               <th>ParchaseDate</th>
                               <th>ExpiryDate</th>
                               <th>warranty</th>

                               <th>Cost</th>
                               <th>Status</th>

                               <th>operations</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td>laptop</td>
                               <td>IT</td>
                               <td>HP</td>
                               <td>19 january 2005</td>
                               <td>10 november 2029</td>
                               <td>2 year</td>

                               <td>50000</td>
                               <td>available</td>

                               <td>
                                 <Link to="/Edit_asset">
                                   {" "}
                                   <button>
                                     {" "}
                                     <i className="fas fa-edit"></i>
                                   </button>
                                 </Link>

                                 <button>
                                   {" "}
                                   <i className="fas fa-trash"></i>
                                 </button>
                               </td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>laptop</td>
                               <td>IT</td>
                               <td>HP</td>
                               <td>19 january 2005</td>
                               <td>10 november 2029</td>
                               <td>2 year</td>

                               <td>50000</td>
                               <td>available</td>

                               <td>
                                 <Link to="/Edit_asset">
                                   {" "}
                                   <button>
                                     {" "}
                                     <i className="fas fa-edit"></i>
                                   </button>
                                 </Link>

                                 <button>
                                   {" "}
                                   <i className="fas fa-trash"></i>
                                 </button>
                               </td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>laptop</td>
                               <td>IT</td>
                               <td>HP</td>
                               <td>19 january 2005</td>
                               <td>10 november 2029</td>
                               <td>2 year</td>
                                <td>50000</td>
                               <td>available</td>
                               <td>
                                 <Link to="/Edit_asset">
                                   {" "}
                                   <button>
                                     {" "}
                                     <i className="fas fa-edit"></i>
                                   </button>
                                 </Link>

                                 <button>
                                   {" "}
                                   <i className="fas fa-trash"></i>
                                 </button>
                               </td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>laptop</td>
                               <td>IT</td>
                               <td>HP</td>
                               <td>19 january 2005</td>
                               <td>10 november 2029</td>
                               <td>2 year</td>

                               <td>50000</td>
                               <td>available</td>

                               <td>
                                 <Link to="/Edit_asset">
                                   {" "}
                                   <button>
                                     {" "}
                                     <i className="fas fa-edit"></i>
                                   </button>
                                 </Link>

                                 <button>
                                   {" "}
                                   <i className="fas fa-trash"></i>
                                 </button>
                               </td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>laptop</td>
                               <td>IT</td>
                               <td>HP</td>
                               <td>19 january 2005</td>
                               <td>10 november 2029</td>
                               <td>2 year</td>

                               <td>50000</td>
                               <td>available</td>

                               <td>
                                 <Link to="/Edit_asset">
                                   {" "}
                                   <button>
                                     {" "}
                                     <i className="fas fa-edit"></i>
                                   </button>
                                 </Link>

                                 <button>
                                   {" "}
                                   <i className="fas fa-trash"></i>
                                 </button>
                               </td>
                             </tr>
                           </tbody>

                           <tbody>
                             <tr>
                               <td>laptop</td>
                               <td>IT</td>
                               <td>HP</td>
                               <td>19 january 2005</td>
                               <td>10 november 2029</td>
                               <td>2 year</td>

                               <td>50000</td>
                               <td>available</td>

                               <td>
                                 <Link to="/Edit_asset">
                                   {" "}
                                   <button>
                                     {" "}
                                     <i className="fas fa-edit"></i>
                                   </button>
                                 </Link>

                                 <button>
                                   {" "}
                                   <i className="fas fa-trash"></i>
                                 </button>
                               </td>
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
