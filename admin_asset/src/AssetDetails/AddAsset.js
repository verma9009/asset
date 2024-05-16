import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function AddAsset() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        {/* <Navbar/> */}

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>


                   <div className="container-fluid  pt-4 px-4">
         <div className="row g-4  justify-content-center">
           <div className="col-sm-12 col-xl-6">
             <div className="bg-light rounded h-100 p-4">
               <form>
                 <label className="form-label">Enter name</label>
                 <input type="text" className="form-control" id="name" />

                 <label className="form-label">Enter email</label>
                 <input type="text" className="form-control" id="name" />

                 <label className="form-label">select type</label>
                 <select className="btn btn-info form-control form-inline">
                   <option>select type</option>
                   <option>IT Asset</option>
                   <option>Non IT Asset</option>
                 </select>

                 <label className="form-label">Enter Manufacturer</label>
                 <input type="text" className="form-control" id="name" />

                 <label className="form-label">Enter ParchaseDate</label>
                 <input type="date" className="form-control" id="name" />

                 <label className="form-label">Enter ExpiryDate</label>
                 <input type="date" className="form-control" id="name" />

                 <label className="form-label">Enter warranty</label>
                 <select className="btn btn-info form-control form-inline">
                   <option>select </option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                   <option>7</option>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
                 </select>

                 <label className="form-label">Enter AssignedDepartment</label>

                 <select className="btn btn-info form-control form-inline">
                   <option>select Departmment</option>
                   <option>IT</option>
                   <option>Hr</option>
                   <option>Finance</option>
                   <option>Project manager</option>

                   <option>Developer</option>
                   <option>Quality assurance</option>
                 </select>

                 <label className="form-label">Enter cost</label>
                 <input type="number" className="form-control" id="name" />

                 <label className="form-label">Enter status</label>

                 <select className="btn btn-info form-control form-inline">
                   <option>select status</option>
                   <option>available</option>
                   <option>unavailable</option>
                 </select>

                 <br></br>
                 <br></br>
                 <br></br>

                 <button className="btn btn-info">
                   <Link to="/"/>
                   submit
                 </button>
               </form>
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
