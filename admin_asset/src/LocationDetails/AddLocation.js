import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
export default function AddLocation() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        {/* <Navbar/> */}

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/>


            /               <div className="container-fluid  pt-4 px-4">
                     <div className="row g-4  justify-content-center">
                         <div className="col-sm-12 col-xl-6">
                             <div className="bg-light rounded h-100 p-4">
                                 <form>
                                     <div className="mb-3">
                                        
                                         <label  className="form-label">Enter location</label>
                                         <input type="text" className="form-control" id="name"/>
                                       
                                         <label for="exampleInputEmail1" className="form-label">Enter address</label>
                                         <input type="number" className="form-control" id="contact"/>
                                         <label for="exampleInputEmail1" className="form-label">Email city</label>
                                         <input type="text" className="form-control" id="name"/>


                                         <label for="exampleInputEmail1" className="form-label">enter state</label>
                                         <select className="btn btn-info form-control form-inline">
                                             <option>select state</option>
                                             <option value="AP">Andhra Pradesh</option>
                                             <option value="AR">Arunachal Pradesh</option>
                                             <option value="AS">Assam</option>
                                             <option value="BR">Bihar</option>
                                             <option value="CT">Chhattisgarh</option>
                                             <option value="GA">Gujarat</option>
                                             <option value="HR">Haryana</option>
                                             <option value="HP">Himachal Pradesh</option>
                                             <option value="JK">Jammu and Kashmir</option>
                                             <option value="GA">Goa</option>
                                             <option value="JH">Jharkhand</option>
                                             <option value="KA">Karnataka</option>
                                             <option value="KL">Kerala</option>
                                             <option value="MP">Madhya Pradesh</option>
                                             <option value="MH">Maharashtra</option>
                                                 <option value="MN">Manipur</option>
                                                 <option value="ML">Meghalaya</option>
                                             <option value="MZ">Mizoram</option>
                                             <option value="NL">Nagaland</option>
                                             <option value="OR">Odisha</option>
                                             <option value="PB">Punjab</option>
                                             <option value="RJ">Rajasthan</option>
                                             <option value="SK">Sikkim</option>
                                             <option value="TN">Tamil Nadu</option>
                                             <option value="TG">Telangana</option>
                                             <option value="TR">Tripura</option>
                                             <option value="UT">Uttarakhand</option>
                                             <option value="UP">Uttar Pradesh</option>
                                             <option value="WB">West Bengal</option>
                                             <option value="AN">Andaman and Nicobar Islands</option>
                                             <option value="CH">Chandigarh</option>
                                             <option value="DN">Dadra and Nagar Haveli</option>
                                             <option value="DD">Daman and Diu</option>
                                             <option value="DL">Delhi</option>
                                             <option value="LD">Lakshadweep</option>
                                             <option value="PY">Puducherry</option>
                                         </select>

                                         <label for="exampleInputEmail1" className="form-label">Email country</label>
                                         <select className="btn btn-info form-control form-inline">
                                             <option >select country</option>
                                             <option>India</option>
                                             <option>japan</option>
                                             <option>america</option>
                                           </select>

                                           <label for="exampleInputEmail1" className="form-label">Email zipcode</label>
                                           <input type="number" className="form-control" id="name"/>
                                           </div>
                                        
 <br></br>
 <br></br>
                                        

                                  
                                   <button className="btn btn-info"><Link to="/" style={{color: "white"}}>submit</Link></button>
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
