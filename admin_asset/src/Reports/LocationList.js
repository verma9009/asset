import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function LocationList() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        {/* <Navbar/> */}

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>

            /        <div className="content-body">
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
                                             
                                                 <th>Name</th>
                                                 <th>address</th>
                                                 <th>city </th>
                                                 <th>state</th>
                                                 <th>country</th>
                                                 <th>zipcode</th>
                                                 <th>Operations</th>
                                                
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                               
                                                 <td>palasia</td>
                                                 <td>sekhar central</td>
                                                 <td>indore</td>
                                                 <td>madhya predesh</td>
                                                 <td>india</td>
                                                 <td>214234</td>
                                                 <td>
                                                     <Link to="/Edit-location"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>
                                        
                                         <tbody>
                                             <tr>
                                               
                                                 <td>khargoan</td>
                                                 <td>sekhar central</td>
                                                 <td>indore</td>
                                                 <td>madhya predesh</td>
                                                 <td>india</td>
                                                 <td>214234</td>
                                                 <td>
                                                     <Link to="/Edit-location"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>
                                         <tbody>
                                             <tr>
                                               
                                                 <td>vijay nagar</td>
                                                 <td>sekhar central</td>
                                                 <td>indore</td>
                                                 <td>madhya predesh</td>
                                                 <td>india</td>
                                                 <td>214234</td>
                                                 <td>
                                                     <Link to="/Edit-location"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>

                                         <tbody>
                                             <tr>
                                               
                                                 <td>palasia</td>
                                                 <td>sekhar central</td>
                                                 <td>indore</td>
                                                 <td>madhya predesh</td>
                                                 <td>india</td>
                                                 <td>214234</td>
                                                 <td>
                                                     <Link to="/Edit-location"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>

                                         <tbody>
                                             <tr>
                                               
                                                 <td>palasia</td>
                                                 <td>sekhar central</td>
                                                 <td>indore</td>
                                                 <td>madhya predesh</td>
                                                 <td>india</td>
                                                 <td>214234</td>
                                                 <td>
                                                     <Link to="/Edit-location"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
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
