

import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import WebService from "../Services/WebService";
import WebAPI from "../Services/WebAPI";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    user_role: "",
    location_id: 1, // Assuming location_id is fixed
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await WebService.postAPI(WebAPI.addEmployee, employee);
      if (response.status) {
        alert("Employee added successfully");
        navigate("/"); // Redirect to the home page or employee list page
      } else {
        alert("Failed to add employee");
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("An error occurred while adding the employee");
    }
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid pt-4 px-4">
              <div className="row g-4 justify-content-center">
                <div className="col-sm-12 col-xl-6">
                  <div className="bg-light rounded h-100 p-4 border border-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Enter First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="first_name"
                          value={employee.first_name}
                          onChange={handleChange}
                        />
                        <label className="form-label">Enter Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="last_name"
                          value={employee.last_name}
                          onChange={handleChange}
                        />
                        <label className="form-label">Contact</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={employee.phone}
                          onChange={handleChange}
                        />
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={employee.email}
                          onChange={handleChange}
                        />
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={employee.password}
                          onChange={handleChange}
                        />
                        <label className="form-label">User Role</label>
                        <input
                          type="text"
                          className="form-control"
                          id="user_role"
                          value={employee.user_role}
                          onChange={handleChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-info">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
