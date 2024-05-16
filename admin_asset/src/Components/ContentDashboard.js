import React from "react";
//import Sidebar from "./Sidebar";
const Content_dashboard = () => {
  return (
    <div className="mx-4">
 <div className="row">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
              download="Report.pdf"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>
        </div>
        <div className="row container ">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Totle Available Assests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      40,00
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-danger shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-danger  text-uppercase mb-1">
                      back for repaire
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      215,
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-danger shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-danger  text-uppercase mb-1">
                      back for repaire
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      215,
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Repaire
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row container-fluid ">
          {/* {/ <!-- Area Chart --> /} */}
          <div className="col-xl-6 col-lg-6">
            <div className="card shadow mb-4">
              {/* {/ <!-- Card Header - Dropdown --> /} */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-info">
                  employee complaints
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Search by name
                    </a>
                    <a className="dropdown-item" href="#">
                      Search by date
                    </a>
                    <div className="dropdown-divider"></div>
                  </div>
                </div>
              </div>
              {/* {/ <!-- Card Body --> /} */}
              <div className="card-body"></div>
            </div>
          </div>

          {/* {/ <!-- Pie Chart --> /} */}
          <div className="col-xl-6 col-lg-6">
            <div className="card shadow mb-4">
              {/* {/ <!-- Card Header - Dropdown --> /} */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-info">
                  complaint status
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      search by name
                    </a>
                    <a className="dropdown-item" href="#">
                      search by date
                    </a>
                    <div className="dropdown-divider"></div>
                  </div>
                </div>
              </div>
              {/* {/ <!-- Card Body --> /} */}
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>   
       </div>
  );
};

export default Content_dashboard;
