import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function ViewComplain() {
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
                                             
                                                 <th>name</th>
                                                 <th>email</th>
                                                 <th>phone no.</th>
                                                 <th>complaint</th>
                                                 <th>complaint status</th>
                                                
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                               
                                                 <td>nidhi</td>
                                                 <td>tqt471@gamil.com</td>
                                                 <td>3651611767</td>
                                                 <td>ohh! it's good</td>
                                                 <td>ohh! it's good</td>
                                         
                                             </tr>
                                           
                                         </tbody>
                                        
                                         <tbody>
                                             <tr>
                                               
                                                 <td>swati</td>
                                                 <td>swatu252@gmail.com</td>
                                                
                                               
                                                 <td>2142343267</td>
                                                 <td>that is nice</td>
                                                 <td>ohh! it's good</td>
                                            </tr>
                                         </tbody>
                                        

                                         <tbody>
                                             <tr>
                                               
                                                 <td>anjali</td>
                                                 <td>andhs1245@gamil.com</td>
                                                
                                               
                                                 <td>214234</td>
                                                 <td>better</td>
                                                 <td>ohh! it's good</td>
                                          
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
