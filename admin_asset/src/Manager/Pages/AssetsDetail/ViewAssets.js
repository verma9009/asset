import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../Components/Sidebar'
import Navbar from '../../../Components/Navbar'

const ViewAssetsManager = () => {
  return (
    
    <div id="wrapper">
    <Sidebar/>

<br/>
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
                        <div style={{display:'flex', gap: "10px"}}>
                            <h4 className="card-title">Assets Table


                                
                            </h4>
                            
                            <div className="input-group" style={{display:" flex", display:"contents"}} >
                                <input type="text" className="bg-light border-0 small" placeholder="Search by name.."
                                    aria-label="Search" aria-describedby="basic-addon2" style={{marginLeft: "20pc"}}/>
                                <div className="input-group-append">
                                    <button className="btn btn-info" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        
                                <div className="dropdown">
                                  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Assets
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#" onclick="changeOption('All')">All</a>
                                    <a className="dropdown-item" href="#" onclick="changeOption('IT Assets')">IT Assets</a>
                                    <a className="dropdown-item" href="#" onclick="changeOption('Non-IT Assets')">Non-IT Assets 3</a>
                                  </div>
                                </div>
                              

                        </div>
                        <br/>

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
                                        <th>AssignedDepartment</th>
                                        <th>Cost</th>
                                        <th>Location</th>
                                        <th>Action</th>
                                        
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
                                        <td>Quality Assurance</td>
                                        <td>50000</td>
                                        <td>indore</td>
                                        <td>
                                            <div className="container">
                                                {/* <!-- Trigger the modal with a button --> */}
                                                <button type="button" className="btn btn-success " data-toggle="modal" data-target="#myModal">Avalaible</button>
                                              
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="myModal" role="dialog">
                                                  <div className="modal-dialog">
                                                  
                                                    {/* <!-- Modal content--> */}
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h4 className="modal-title">Click Confirm to Assign Assets</h4>
                                                      </div>
                                                     
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-success" data-dismiss="modal">Confirm</button>
                                                                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cencel</button>
                                              
                                                      </div>
                                                    </div>
                                                    
                                                  </div>
                                                </div>
                                                
                                              </div>
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
                                        <td>Quality Assurance</td>
                                        <td>50000</td>
                                        <td>indore</td>
                                        <td>
                                            <div className="container ">

                                                <button className="btn btn-danger ">Unavailable</button>
                                                <a href="#" style={{color: "rgb(41, 126, 200)"}}>view Employee</a>


                                            </div>

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
                                        <td>Quality Assurance</td>
                                        <td>50000</td>
                                        <td>indore</td>
                                        <td>
                                            <div className="container">
                                                {/* <!-- Trigger the modal with a button --> */}
                                                <button type="button" className="btn btn-success " data-toggle="modal" data-target="#myModal">Avalaible</button>
                                              
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="myModal" role="dialog">
                                                  <div className="modal-dialog">
                                                  
                                                    {/* <!-- Modal content--> */}
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h4 className="modal-title">Click Confirm to Assign Assets</h4>
                                                      </div>
                                                     
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-success" data-dismiss="modal">Confirm</button>
                                                                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cencel</button>
                                              
                                                      </div>
                                                    </div>
                                                    
                                                  </div>
                                                </div>
                                                
                                              </div>
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
                                        <td>Quality Assurance</td>
                                        <td>50000</td>
                                        <td>indore</td>
                                        <td>
                                            <div className="container ">

                                                <button className="btn btn-danger ">Unavailable</button>
                                                <a href="#" style={{color: "rgb(41, 126, 200)"}}>view Employee</a>


                                            </div>

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
                                        <td>Quality Assurance</td>
                                        <td>50000</td>
                                        <td>indore</td>
                                        <td>
                                            <div className="container">
                                                {/* <!-- Trigger the modal with a button --> */}
                                                <button type="button" className="btn btn-success " data-toggle="modal" data-target="#myModal">Avalaible</button>
                                              
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="myModal" role="dialog">
                                                  <div className="modal-dialog">
                                                  
                                                    {/* <!-- Modal content--> */}
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h4 className="modal-title">Click Confirm to Assign Assets</h4>
                                                      </div>
                                                     
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-success" data-dismiss="modal">Confirm</button>
                                                                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cencel</button>
                                              
                                                      </div>
                                                    </div>
                                                    
                                                  </div>
                                                </div>
                                                
                                              </div>
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
                                        <td>Quality Assurance</td>
                                        <td>50000</td>
                                        <td>indore</td>
                                        <td>
                                            <div className="container ">

                                                <button className="btn btn-danger ">Unavailable</button>
                                                <a href="#" style={{color: "rgb(41, 126, 200)"}}>view Employee</a>


                                            </div>

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

  )
}

export default ViewAssetsManager
