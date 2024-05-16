import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import WebService from "../Services/WebService";
import WebAPI from "../Services/WebAPI";

function AddEmployee(){
 

    return<>
      <div id="wrapper">
        <Sidebar/>
        {/* <Navbar/> */}

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>


                   <div classNameName="container-fluid  pt-4 px-4">
         <div className="row g-4  justify-content-center">
           <div className="col-sm-12 col-xl-6">
             <div className="bg-light rounded h-100 p-4  border border-4">
               <form>
                 <div className="mb-3">
                   <label className="form-label">Enter name</label>
                   <input type="text" className="form-control" id="name" />

                   <label for="exampleInputEmail1" className="form-label">
                     Contact
                   </label>
                   <input type="number" className="form-control" id="contact" />
                   <label for="exampleInputEmail1" className="form-label">
                     Email address
                   </label>
                   <input type="text" className="form-control" id="name" />
                   <label for="exampleInputEmail1" className="form-label">
                     password
                   </label>
                   <input type="text" className="form-control" id="name" />
                 </div>

                 <button className="btn btn-info">
                   <Link to="/">submit</Link>
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
}
export default AddEmployee;