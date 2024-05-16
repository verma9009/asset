import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function EmployeeList() {
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
                                 <h4 className="card-title">empolyee data</h4>
                                 <div className="table-responsive">
                                     <table className="table table-striped table-bordered zero-configuration">
                                         <thead>
                                             <tr>
                                                 <th>Id</th>
                                                 <th>Name</th>
                                                 <th>Contact</th>
                                                 <th>Email</th>
                                                 <th>Location</th>
                                                 <th>Password</th>
                                                 <th>Operations</th>
                                                
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                                 <td>1</td>
                                                 <td>rohit yadav</td>
                                                 <td>7246832719</td>
                                                 <td>ritu24@gamil.com</td>
                                                 <td>indore</td>
                                                 <td>emp1</td>
                                                 <td>
                                                     <Link to="Edit_empolyee"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>
                                        
                                         <tbody>
                                             <tr>
                                                 <td>2</td>
                                                 <td>mohit verma</td>
                                                 <td>7246832479</td>
                                                 <td>anjali24@gamil.com</td>
                                                 <td>Bhopal</td>
                                                 <td>emp2</td>
                                                 <td>
                                                     <Link to="/Add_employee"> <button  > <i className="fas fa-edit"></i></button></Link>

                                                  <button> <i className="fas fa-trash"></i></button> 
												 
 												</td>
                                             </tr>
                                           
                                         </tbody>

                                         <tbody>
                                             <tr>
                                                 <td>3</td>
                                                 <td>Tanish jain</td>
                                                 <td>7246832719</td>
                                                 <td>tanisha24@gamil.com</td>
                                                 <td>Khargoan</td>
                                                 <td>emp3</td>
                                                 <td>
                                                     <Link to="/Edit_empolyee"> <button  > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>

                                         <tbody>
                                             <tr>
                                                 <td>4</td>
                                                 <td>Bhavna Dhatrak</td>
                                                 <td>7246832719</td>
                                                 <td>bhavna24@gamil.com</td>
                                                 <td>pune</td>
                                                 <td>emp4</td>
                                                 <td>
                                                     <Link to="/Edit_empolyee"> <button > <i className="fas fa-edit"></i></button></Link>
   
                                                     <button> <i className="fas fa-trash"></i></button> 
                                                    
                                                    </td>
                                             </tr>
                                           
                                         </tbody>

                                         <tbody>
                                             <tr>
                                                 <td>5</td>
                                                 <td>Rishika Chimaniya</td>
                                                 <td>723562719</td>
                                                 <td>rishika24@gamil.com</td>
                                                 <td>mumbai</td>
                                                 <td>emp5</td>
                                                 <td>
                                                    <Link to="/Edit_empolyee"> <button  > <i className="fas fa-edit"></i></button></Link>
   
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
