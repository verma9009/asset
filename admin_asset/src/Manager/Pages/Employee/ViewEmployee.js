import React from 'react'
import Sidebar from '../../component/Sidebar'

const ViewEmployees = () => {
  return (
    <>
      {/* <div id="content-wrapper" className="d-flex flex-column">
      <div id="content"> */}

    <div class="content-body">
            <div class="container-fluid row">
			 <div class="col-md-12">
        <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                               <div style={{display:" flex", marginBottom: "3px"}} >
                                   <h4 class="card-title">Employee Table</h4>
   
                                   <div class="input-group" style={{display: "flex", display:"contents"}} >
                                       <input type="text" class="bg-light border-0 small" placeholder="Search by name.."
                                           aria-label="Search" aria-describedby="basic-addon2" style={{marginLeft: "20pc",width: "15pc"}}/>
                                       <div class="input-group-append">
                                           <button class="btn btn-info" type="button">
                                               <i class="fas fa-search fa-sm"></i>
                                           </button>
                                       </div>
                                   </div>


                               </div>
                               <br/>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Contact</th>
                                                <th>Email</th>
                                                <th>Location</th>
                                                <th>Password</th>
                                                <th>Status</th>
                                                
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
                                                    <button class="btn btn-success ">Assigned</button>
   
                                                    
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
                                                    <button class="btn btn-success ">Assigned</button>
												 
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
                                                  <a href="./View_Assets.html">
                                                      <button class="btn btn-danger">UnAssigned</button>

                                                </a> 
                                                    
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
                                                    <button class="btn btn-success ">Assigned</button>
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
                                                    <a href="./View_Assets.html">
                                                        <button class="btn btn-danger">UnAssigned</button>
  
                                                  </a> 
                                                      
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
    {/* </div>
    </div> */}
  </>
  )
}

export default ViewEmployees
