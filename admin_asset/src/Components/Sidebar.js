import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import Sidebar from './Components/sidebar'
// import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { storeUserInfo } from "../Services/Slice";

const Sidebar = () => {
  const user = useSelector((state) => state.userData.value);
  console.log(user);
  const dispatch=useDispatch();
  const navigate = useNavigate();

const Logout=()=>{
 
       dispatch(storeUserInfo({ first_name: undefined,
        last_name: undefined,
        phone: undefined,
        email: undefined,
        password: undefined,
        user_role: undefined,
        location_id: undefined,
        islogin:false}))
       navigate("/Login")
    
}



  return (
    <>
      <ul
        className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3"> Admin </div>
        </Link>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        <hr className="sidebar-divider" />
{user.islogin == true ? <> {user.user_role == "admin" ? <>

<li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#employeelist"
            aria-expanded="true"
            aria-controls="employeelist"
          >
            <span>Employee</span>
          </Link>
          <div
            id="employeelist"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Employee info</h6>
              <Link className="collapse-item" to="/AddEmployee">
                Add employee
              </Link>
              <Link className="collapse-item" to="/ViewEmployee">
                view employee
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#assetinfo"
            aria-expanded="true"
            aria-controls="assettransfer"
          >
            <span>Asset Details</span>
          </Link>
          <div
            id="assetinfo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Asset info</h6>
              <Link className="collapse-item" to="/AddAsset">
                Add asset{" "}
              </Link>
              <Link className="collapse-item" to="/ViewAsset">
                View asset{" "}
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#location"
            aria-expanded="true"
            aria-controls="assettransfer"
          >
            <span>Location Details</span>
          </Link>
          <div
            id="location"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">location info</h6>
              <Link className="collapse-item" to="/AddLocation">
                Add location{" "}
              </Link>
              <Link className="collapse-item" to="/ViewLocation">
                View location{" "}
              </Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#Security"
            aria-expanded="true"
            aria-controls="Security"
          >
            <span>Assign Asset</span>
          </Link>
          <div
            id="Security"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Assign Asset</h6>
              <Link className="collapse-item" to="/AssetAssign">
                asset assign to
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#Report"
            aria-expanded="true"
            aria-controls="Report"
          >
            <span>Report</span>
          </Link>
          <div
            id="Report"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Report</h6>

              <Link className="collapse-item" to="/EmployeeList">
                Employee list
              </Link>
              <Link className="collapse-item" to="/AssetList">
                asset list
              </Link>
              <Link className="collapse-item" to="/LocationList">
                location list
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#feed"
            aria-expanded="true"
            aria-controls="Security"
          >
            <span>feedback</span>
          </Link>
          <div
            id="feed"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">feedback</h6>
              <Link className="collapse-item" to="/ViewFeedback">
                view_feedback
              </Link>
              <Link className="collapse-item" to="/ViewComplain">
                view_complaints
              </Link>
            </div>
          </div>
        </li>



</> : <></>}


{user.user_role == "manager" ? <>  <hr className="sidebar-divider d-none d-md-block" />

{/* -----------------------Manager ----------------------------- */}
<li className="nav-item">
  <a
    className="nav-link collapsed"
    href="#"
    data-toggle="collapse"
    data-target="#employeelist"
    aria-expanded="true"
    aria-controls="employeelist"
  >
    <span>Employee</span>
  </a>
  <div
    id="employeelist"
    className="collapse"
    aria-labelledby="headingUtilities"
    data-parent="#accordionSidebar"
  >
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header">Employee info</h6>
      <Link to="/ViewEmployee" className="collapse-item">
        view employee
      </Link>
    </div>
  </div>
</li>

<hr className="sidebar-divider" />
<li className="nav-item">
  <a
    className="nav-link collapsed"
    href="#"
    data-toggle="collapse"
    data-target="#Security1"
    aria-expanded="true"
    aria-controls="Security"
  >
    <span> Asset Detail</span>
  </a>
  <div
    id="Security1"
    className="collapse"
    aria-labelledby="headingTwo"
    data-parent="#accordionSidebar"
  >
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header"> Asset Info</h6>
      <Link to="/ViewAssets" className="collapse-item">
        {" "}
        View Asset{" "}
      </Link>
    </div>
  </div>
</li>

<hr className="sidebar-divider" />
<li className="nav-item">
  <a
    className="nav-link collapsed"
    href="#"
    data-toggle="collapse"
    data-target="#Security"
    aria-expanded="true"
    aria-controls="Security"
  >
    <span>complaint</span>
  </a>
  <div
    id="Security"
    className="collapse"
    aria-labelledby="headingTwo"
    data-parent="#accordionSidebar"
  >
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header">Report</h6>
      <Link to="/Complaints" className="collapse-item">
        View_Complaints
      </Link>
    </div>
  </div>
</li>  </> : <></>}

{user.user_role == "employee" ? <>   </> : <></>}

 </>: <></>}
        
        {/* <!-- Divider --> */}
        <li className="nav-item active">
          <b className="nav-link" to="/">
            
            <span onClick={Logout} style={{cursor:"pointer"}}>Logout</span>
          </b>
        </li> 
      </ul>
    </>
  );
};

export default Sidebar;
