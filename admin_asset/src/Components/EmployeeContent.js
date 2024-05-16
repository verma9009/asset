import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const EmployeeContent = () => {
  return (
    <>
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
                    <div style={{display: "flex" ,marginbottom: "3px"}}>
                      <h4 className="card-title">Employee Table</h4>

                      <div
                        className="input-group"
                        style={{display:"flex", display:"contents"}}
                      >
                        <input
                          type="text"
                          className="bg-light border-0 small"
                          placeholder="Search by name.."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          style={{marginleft: "20pc",width: "15pc"}}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-info" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
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
                              <button className="btn btn-success ">
                                Assigned
                              </button>
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
                              <button className="btn btn-success ">
                                Assigned
                              </button>
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
                                <button className="btn btn-danger">
                                  UnAssigned
                                </button>
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
                              <button className="btn btn-success ">
                                Assigned
                              </button>
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
                                <button className="btn btn-danger">
                                  UnAssigned
                                </button>
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




            <Outlet/>
          </div>
        </div>
      </div>

    </>
  );
};

export default EmployeeContent;
