import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebService from "./Services/WebService";
import WebAPI from "./Services/WebAPI";
import { storeUserInfo } from "./Services/Slice";
import { useDispatch } from "react-redux";
export default function Login() 
{


    var email=useRef();
    var password=useRef();
  
    var dispatch= useDispatch();
    var navigate= useNavigate();
  
    var LoginUser=async(event)=>{
      event.preventDefault();
      var em=email.current.value;
      var pass=password.current.value;
      var obj={email:em,password:pass};
  
      var responce = await WebService.postAPI(WebAPI.loginAPI,obj);
      console.log(" data is : ",responce);
  
      if(responce.data.status)
      {
        if(responce.data.data.user.user_role == "admin" ||responce.data.data.user.user_role == "Admin"  ){
       
      const d=  dispatch(storeUserInfo({
            first_name: responce.data.data.user.first_name,
            last_name: responce.data.data.user.last_name,
            phone: responce.data.data.user.phone,
            email: responce.data.data.user.email,
            password: responce.data.data.user.password,
            user_role:"admin",
            location_id: responce.data.data.user.location_id,
            islogin:true
        }))
        console.log("d,d",d)
        navigate("/Dashboard");
    }else if(responce.data.data.user.user_role == "manager" ||responce.data.data.user.user_role == "Manager"  ){
       
        const d=  dispatch(storeUserInfo({
              first_name: responce.data.data.user.first_name,
              last_name: responce.data.data.user.last_name,
              phone: responce.data.data.user.phone,
              email: responce.data.data.user.email,
              password: responce.data.data.user.password,
              user_role:"manager",
              location_id: responce.data.data.user.location_id,
              islogin:true
          }))
          console.log("d,d",d)
          navigate("/Dashboard");
      }
      }
  
    }
  





  return (
    <>

<div className="container">

{/* <!-- Outer Row --> */}
<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg container"><img src="imgasmt.jpeg" height="700px" width="500px" style={{padding: "50px"}} /></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."  ref={email}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password " ref={password}/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                        <label className="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <button className="btn btn-info btn-user btn-block"  onClick={LoginUser}>
                                    Login
                                </button>
                                <hr/>
                                <Link to="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                </Link>
                                <Link to="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </Link>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="forgot-password.html">Forgot Password?</Link>
                            </div>
                            <div className="text-center">./admin_asset/
                                <Link className="small" to="/Register">Create an Account!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>

    </>
  );
}
